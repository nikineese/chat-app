import { ServerEmit } from "./types";
import { Listener } from "./constants";
import { context } from "./socket";

export const newMessageReceived = (callback: ServerEmit[Listener.NEW_MESSAGE]) => {
  context.socket?.on(Listener.NEW_MESSAGE, callback);
};
export const loginDone = (callback: ServerEmit[Listener.LOGIN]) => {
  context.socket?.on(Listener.LOGIN, callback);
};
export const userJoined = (callback: ServerEmit[Listener.USER_JOINED]) => {
  context.socket?.on(Listener.USER_JOINED, callback);
};
export const userLeft = (callback: ServerEmit[Listener.USER_LEFT]) => {
  context.socket?.on(Listener.USER_LEFT, callback);
};
export const userTyping = (callback: ServerEmit[Listener.TYPING]) => {
  context.socket?.on(Listener.TYPING, callback);
};
export const userStopTyping = (callback: ServerEmit[Listener.STOP_TYPING]) => {
  context.socket?.on(Listener.STOP_TYPING, callback);
};
