import React, { useRef } from "react";
import { ChatListParams } from "../../../model/types";
import { ChatMessage } from "../../chat-message";
import { ChatWindow } from "./styled";
import { useRefWithEvent } from "shared/lib/hooks/useRefWithEvent";
import * as model from "../../../model";

export const ChatList: React.FC<ChatListParams> = ({ messages }) => {
  const ref = useRef(null);
  useRefWithEvent(ref, model.scrollDown, [messages]);
  return (
    <ChatWindow ref={ref}>
      {messages.map((message) => (
        <ChatMessage message={message} />
      ))}
    </ChatWindow>
  );
};
