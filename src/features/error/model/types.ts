import { Event } from "effector";

export type ErrorPopupParams = {
  error: Error;
  setError: Event<Error>;
};
