const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    index: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid Email Address",
    ],
    required: true
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  hashed_password: {
    type: String,
    required: true
  },
  salt: String,
});

UserSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });
UserSchema.methods = {
  authenticate: function (plaintext) {
    return this.encryptPassword(plaintext) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return " ";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return " ";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random());
  },
};

var User = mongoose.model("User", UserSchema);
module.exports = User;
