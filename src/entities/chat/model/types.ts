import { Message } from "shared/api";

export type ChatMessageParams = {
  message: Message;
};
export type ChatListParams = {
  messages: Message[];
};
