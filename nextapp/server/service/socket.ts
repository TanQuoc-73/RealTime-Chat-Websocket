import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000", // FE URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);

  socket.on("chat message", (msg) => {
    console.log("message:", msg);

    // gửi cho tất cả client (cả người gửi)
    io.emit("chat message", msg);

    // nếu muốn gửi cho tất cả trừ người gửi:
    // socket.broadcast.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected:", socket.id);
  });
});

httpServer.listen(4000, () => {
  console.log("🚀 Socket.IO server running on http://localhost:4000");
});
