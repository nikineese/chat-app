import { Event } from "effector";
import { ChangeEvent } from "react";

export const prependEventTarget = (changeEvent: Event<string>) => {
  return changeEvent.prepend<ChangeEvent<HTMLInputElement>>((e) => e.target.value);
};
