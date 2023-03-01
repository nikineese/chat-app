import { createEffect, createEvent, merge, sample } from "effector";
import { Login, Message, UserEvent, UserTyping } from "shared/api";
import {
  loginDone,
  newMessageReceived,
  userJoined,
  userLeft,
  userStopTyping,
  userTyping,
} from "shared/api/socket/subscribers";
import { connectUserFx } from "./emitters";

export const addNewMessage = createEvent<Message>();
export const setNumUsers = createEvent<number>();
export const getNumUsers = setNumUsers.prepend<Login>(({ numUsers }) => numUsers);
export const getUserJoined = createEvent<UserEvent>();
export const getUserLeft = createEvent<UserEvent>();
export const getUserTyping = createEvent<UserTyping>();
export const getUserStopTyping = createEvent<UserTyping>();
export const numUsersChanged = merge([getNumUsers, getUserJoined, getUserLeft]);

export const receiveNewMessageFx = createEffect(() => {
  newMessageReceived(addNewMessage);
});
export const userLoggedFx = createEffect(() => {
  loginDone(getNumUsers);
});
export const userJoinedFx = createEffect(() => {
  userJoined(getUserJoined);
});
export const userLeftFx = createEffect(() => {
  userLeft(getUserLeft);
});
export const userTypingFx = createEffect(() => {
  userTyping(getUserTyping);
});
export const userStopTypingFx = createEffect(() => {
  userStopTyping(getUserStopTyping);
});

sample({
  clock: connectUserFx.done,
  target: [
    receiveNewMessageFx,
    userLoggedFx,
    userJoinedFx,
    userLeftFx,
    userTypingFx,
    userStopTypingFx,
  ],
});
