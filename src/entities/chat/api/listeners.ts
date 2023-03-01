import { createEffect } from "effector";
import { socket } from "shared/api";

export const unsubscribeFx = createEffect(() => {
  socket.stop();
});
