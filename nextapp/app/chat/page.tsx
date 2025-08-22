"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

let socket: any;

export default function ChatPage() {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>([]);
  const [message, setMessage] = useState("");
  const [username] = useState(() => "User" + Math.floor(Math.random() * 1000));

  useEffect(() => {
    socket = io("http://localhost:4000");

    socket.on("chat message", (msg: { user: string; text: string }) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") return;
    socket.emit("chat message", { user: username, text: message });
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md flex flex-col h-full">
        <CardContent className="flex flex-col flex-grow p-4 space-y-4">
          {/* Danh sách tin nhắn */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.user === username ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-2xl max-w-[70%] shadow text-sm ${
                    msg.user === username
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <p className="font-semibold text-xs">{msg.user}</p>
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <Input
              placeholder="Nhập tin nhắn..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage}>Gửi</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
