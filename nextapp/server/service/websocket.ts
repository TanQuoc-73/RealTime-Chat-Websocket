import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*", // tạm thời cho phép tất cả, sau này nên giới hạn
  },
});

io.on("connection", (socket) => {
  console.log("✅ Client connected:", socket.id);

  socket.on("message", (msg) => {
    console.log("📩 Received:", msg);
    socket.broadcast.emit("message", msg);
  });

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

httpServer.listen(4000, () => {
  console.log("🚀 WebSocket server running at http://localhost:4000");
});
