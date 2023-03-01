import { context, Emitter } from "shared/api";

export const addUser = (username: string) => {
  context.socket?.emit(Emitter.ADD_USER, username);
};
export const addMessage = (data: string) => {
  context.socket?.emit(Emitter.NEW_MESSAGE, data);
};
export const typing = () => {
  context.socket?.emit(Emitter.TYPING);
};
export const stopTyping = () => {
  context.socket?.emit(Emitter.STOP_TYPING);
};
