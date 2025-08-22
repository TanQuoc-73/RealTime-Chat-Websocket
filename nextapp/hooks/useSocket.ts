"use client";

import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

let socket: Socket;

export function useSocket() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    if (!socket) {
      socket = io({
        path: "/api/socket/io",
      });
    }

    socket.on("connect", () => setConnected(true));
    socket.on("disconnect", () => setConnected(false));

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return { socket, connected };
}
