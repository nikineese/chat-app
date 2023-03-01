import React from "react";
import { useStore } from "effector-react";
import { userModel } from "entities/user";
import { chatModel } from "entities/chat";
import { Box, Button, TextField, Typography } from "@mui/material";

export const Auth: React.FC = () => {
  const username = useStore(userModel.$username);

  return (
    <Box
      component="form"
      display="flex"
      onSubmit={(e) => {
        e.preventDefault();
        chatModel.userConnected(username);
      }}
      flexDirection="column"
      margin="30px"
      width="400px"
      height="600px"
      boxShadow="4px 4px 17px -3px rgba(0,0,0,0.75)"
      gap="50px"
      padding="15px"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h2">Global chat</Typography>
      <Box display="flex" flexDirection="column" gap="15px">
        <Typography variant="h4">Authorize please</Typography>
        <TextField
          required
          id="username"
          label="Username"
          defaultValue="Enter username..."
          value={username}
          onChange={userModel.handleUsernameChanged}
        />
        <Button type="submit">Enter the chat</Button>
      </Box>
    </Box>
  );
};
