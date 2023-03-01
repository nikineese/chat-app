import { Context } from "./types";
import { io } from "socket.io-client";
import { API_URL } from "../../config";

export const context: Context = { socket: null };

export const socket = {
  start: () => {
    if (context.socket?.connected) {
      context.socket.close();
    }
    context.socket = io(API_URL, {
      transports: ["websocket"],
    });
  },
  stop: () => {
    context.socket?.close();
  },
};
