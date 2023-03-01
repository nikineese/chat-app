import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import { ChatMessageParams } from "../../model/types";

export const ChatMessage: React.FC<ChatMessageParams> = ({ message }) => {
  return (
    <ListItem>
      <ListItemText>
        <Typography color={message.color}>{message.username}</Typography>
        <Typography>{message.message}</Typography>
      </ListItemText>
    </ListItem>
  );
};
