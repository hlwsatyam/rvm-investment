const mongoose = require("mongoose");

const intrestSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      default: "999999999999",
    },
    email: {
      type: String,
      default: "email",
    },
    postal: {
      type: Number,
      default: 1234,
    },
    isNumberVarified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const IntrestModel = mongoose.model("intrest", intrestSchema);

module.exports = { IntrestModel };
