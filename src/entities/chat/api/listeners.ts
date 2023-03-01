import { createEffect } from "effector";
import { context } from "shared/api";

export const unsubscribeFx = createEffect(() => {
  context.socket?.close();
});
