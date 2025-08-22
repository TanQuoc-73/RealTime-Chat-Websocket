import { NextApiResponse } from "next";
import { Server as NetServer } from "http";
import { Server as SocketIOServer } from "socket.io";

const ioHandler = (req: Request, res: NextApiResponse) => {
  if (!(res.socket as any).server.io) {
    console.log("⚡ Starting Socket.io server...");

    const httpServer: NetServer = (res.socket as any).server as any;
    const io = new SocketIOServer(httpServer, {
      path: "/api/socket/io",
      cors: { origin: "*" },
    });

    io.on("connection", (socket) => {
      console.log("✅ New client connected:", socket.id);

      // Nhận tin nhắn từ client
      socket.on("message:new", (msg) => {
        console.log("📩 Message:", msg);

        // Broadcast cho tất cả client
        io.emit("message:received", msg);
      });

      socket.on("disconnect", () => {
        console.log("❌ Client disconnected:", socket.id);
      });
    });

    (res.socket as any).server.io = io;
  }
  res.end();
};

export const GET = ioHandler;
export const POST = ioHandler;
