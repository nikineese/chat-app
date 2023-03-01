import { createEvent, restore } from "effector";
import { prependEventTarget } from "shared/lib/helpers/prependEventTarget";
import { LsKeys } from "shared/config";

const usernameChanged = createEvent<string>();
export const handleUsernameChanged = prependEventTarget(usernameChanged);
export const $username = restore(
  usernameChanged,
  localStorage.getItem(LsKeys.USERNAME) || ""
);
