import { Socket } from "socket.io-client";

export type Context = {
  socket: Socket<ServerEmit, ClientEmit> | null;
};
export type Message = {
  username: string;
  message: string;
  color?: string;
};
export type Login = {
  numUsers: number;
};
export type UserTyping = {
  username: string;
};
export type UserEvent = {
  username: string;
  numUsers: number;
};
export type ServerEmit = {
  new_message: (data: Message) => void;
  login: (data: Login) => void;
  user_joined: (data: UserEvent) => void;
  user_left: (data: UserEvent) => void;
  typing: (user: UserTyping) => void;
  stop_typing: (user: UserTyping) => void;
};
export type ClientEmit = {
  new_message: (message: string) => void;
  add_user: (username: string) => void;
  typing: () => void;
  stop_typing: () => void;
};
