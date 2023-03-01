import { socket } from "shared/api";
import { createEffect } from "effector";
import { addMessage, addUser } from "../api";
export const connectUserFx = createEffect((username: string) => {
  socket.start();
  addUser(username);
  return username;
});
export const sendNewMessageFx = createEffect((message: string) => {
  addMessage(message);
  return message;
});
