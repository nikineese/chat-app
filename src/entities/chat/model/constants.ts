import { Message } from "shared/api";

export const userLeftMessage = (username: string): Message => ({
  username,
  message: `left...`,
});
export const userJoinedMessage = (username: string): Message => ({
  username,
  message: `joined!`,
});
