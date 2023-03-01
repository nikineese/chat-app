import React from "react";
import { Chat } from "features/chat";
import { ErrorPopup } from "features/error";
import { useStore } from "effector-react";
import { chatModel } from "entities/chat";

const ChatPage: React.FC = () => {
  const error = useStore(chatModel.$error);
  return (
    <>
      <Chat />
      <ErrorPopup error={error} setError={chatModel.setError} />
    </>
  );
};

export default ChatPage;
