import React from "react";
import { Auth } from "features/auth";
import { Box } from "@mui/material";

const AuthPage: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Auth />
    </Box>
  );
};

export default AuthPage;
