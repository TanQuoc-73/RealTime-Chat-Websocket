import mongoose, { Schema, models } from "mongoose";

const MessageSchema = new Schema(
  {
    sender: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = models.Message || mongoose.model("Message", MessageSchema);
export default Message;
