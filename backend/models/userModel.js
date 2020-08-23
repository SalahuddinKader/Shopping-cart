const mongoose = require("mongoose");

const userScheama = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetToken: String,
    expireToken: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userScheama);
