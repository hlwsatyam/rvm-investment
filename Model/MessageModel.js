const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "user",
  },
  email: {
    type: String,
    default: "email",
  },
  phone: {
    type: String,
    default: "phone",
  },
  message: {
    type: String,
    default: "message",
  },
});

const MessageModel = mongoose.model("form", messageSchema);

module.exports = { MessageModel };
