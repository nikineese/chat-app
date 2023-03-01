import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { ErrorPopupParams } from "../model";
export const ErrorPopup: React.FC<ErrorPopupParams> = ({ error, setError }) => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setError(new Error(""));
  };
  return (
    <Snackbar open={!!error.message} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {error.message}
      </Alert>
    </Snackbar>
  );
};
