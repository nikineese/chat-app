import { MutableRefObject, useEffect } from "react";
import { Event } from "effector";

export const useRefWithEvent = (
  ref: MutableRefObject<any>,
  event: Event<MutableRefObject<any>>,
  deps?: any[]
) => {
  useEffect(() => {
    event(ref);
  }, deps || []);
};
