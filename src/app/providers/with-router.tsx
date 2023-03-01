import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { CircularProgress, Stack } from "@mui/material";

export const withRouter = (Component: React.ComponentType) => () =>
  (
    <BrowserRouter>
      <Suspense
        fallback={
          <Stack alignItems="center">
            <CircularProgress size={80} />
          </Stack>
        }
      >
        <Component />
      </Suspense>
    </BrowserRouter>
  );
