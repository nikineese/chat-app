import { ChatList, chatModel } from "entities/chat";
import { useStore } from "effector-react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

export const Chat: React.FC = () => {
  const messages = useStore(chatModel.$messages);
  const message = useStore(chatModel.$message);
  const numUsers = useStore(chatModel.$numUsers);
  const usersTyping = useStore(chatModel.$usersTyping);

  return (
    <Container>
      <Box display="flex" justifyContent="center">
        <Typography>Users in chat: {numUsers}</Typography>
      </Box>
      <ChatList messages={messages} />
      {usersTyping.length > 0 && (
        <Typography>{usersTyping.map((el) => el)} typing...</Typography>
      )}
      <Box display="flex" gap="20px" alignItems="center">
        <TextField
          required
          id="message"
          label="Message"
          defaultValue="Enter message..."
          value={message}
          onChange={chatModel.handleNewMessageChanged}
        />
        <Button variant="contained" onClick={() => chatModel.messageSent()}>
          Send message
        </Button>
        <Button color="error" onClick={() => chatModel.userDisconnected()}>
          Disconnect
        </Button>
      </Box>
    </Container>
  );
};
