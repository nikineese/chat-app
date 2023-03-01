import { createEvent, createStore, sample, restore, createEffect } from "effector";
import { stopTyping, typing, unsubscribeFx } from "../api";
import { Message } from "shared/api";
import { userJoinedMessage, userLeftMessage } from "./constants";
import {
  addNewMessage,
  getUserJoined,
  getUserLeft,
  getUserStopTyping,
  getUserTyping,
  numUsersChanged,
  setNumUsers,
} from "./listeners";
import { connectUserFx, sendNewMessageFx } from "./emitters";
import { prependEventTarget } from "shared/lib/helpers/prependEventTarget";
import { MutableRefObject } from "react";
import { getRandomColor } from "shared/lib/helpers/getRandomColor";
import { LsKeys } from "../../../shared/config";

export const userConnected = createEvent<string>();
export const userDisconnected = createEvent();
export const messageSent = createEvent();
const newMessageChanged = createEvent<string>();
export const handleNewMessageChanged = prependEventTarget(newMessageChanged);
export const scrollDown = createEvent<MutableRefObject<HTMLDivElement | null>>();
export const setError = createEvent<Error>();

export const $error = restore<Error>(setError, new Error(""));
export const $connected = createStore(false)
  .on(connectUserFx.doneData, () => true)
  .reset(unsubscribeFx.doneData);
export const $message = restore(newMessageChanged, "").reset(
  sendNewMessageFx.doneData
);
export const $usersTyping = createStore<string[]>([])
  .on(getUserTyping, (users, { username }) => {
    if (users.includes(username)) return;
    return [...users, username];
  })
  .on(getUserStopTyping, (users, { username }) =>
    users.filter((user) => user !== username)
  );
export const $messages = createStore<Message[]>([])
  .on(sendNewMessageFx.doneData, (messages, message) => [
    ...messages,
    { username: "Me", message: message, color: getRandomColor() },
  ])
  .on(addNewMessage, (messages, newMessage) => [
    ...messages,
    { ...newMessage, color: getRandomColor() },
  ])
  .on(getUserJoined, (messages, { username }) => [
    ...messages,
    userJoinedMessage(username),
  ])
  .on(getUserLeft, (messages, { username }) => [
    ...messages,
    userLeftMessage(username),
  ])
  .reset(connectUserFx.doneData);
export const $numUsers = restore(setNumUsers, 0).on(
  numUsersChanged,
  (_, { numUsers }) => numUsers
);

export const saveUsernameFx = createEffect((username: string) => {
  localStorage.setItem(LsKeys.USERNAME, username);
});
export const scrollDownFx = createEffect(
  (ref: MutableRefObject<HTMLDivElement | null> | null) => {
    if (!ref || !ref.current) return;
    ref.current?.scrollTo({
      top: ref.current?.scrollHeight,
      behavior: "smooth",
    });
  }
);

newMessageChanged.watch((message) => {
  typing();
  if (!message) {
    stopTyping();
  }
});
messageSent.watch(() => {
  stopTyping();
});

sample({
  clock: scrollDown,
  target: scrollDownFx,
});

sample({
  clock: messageSent,
  source: $message,
  filter: (message) => !!message,
  target: sendNewMessageFx,
});

sample({
  clock: userConnected,
  filter: (username) => username !== "Me",
  target: connectUserFx,
});

sample({
  clock: connectUserFx.doneData,
  target: saveUsernameFx,
});

sample({
  clock: userDisconnected,
  target: unsubscribeFx,
});
sample({
  clock: [
    connectUserFx.failData,
    sendNewMessageFx.failData,
    unsubscribeFx.failData,
    saveUsernameFx.failData,
  ],
  target: setError,
});
