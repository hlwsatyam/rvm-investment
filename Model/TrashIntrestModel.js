const mongoose = require("mongoose");

const intrestTrashSchema = new mongoose.Schema(
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

const IntrestTrashModel = mongoose.model("intrestTrash", intrestTrashSchema);

module.exports = { IntrestTrashModel };
