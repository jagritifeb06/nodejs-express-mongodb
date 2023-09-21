const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

module.exports.MongoConnect = async function () {
//   console.log(process.env.MONGO_URL);
  try {
    await mongoose.connect(process.env.MONGO_URL + "/" + process.env.DB_NAME);
    console.log("Database connection established");
  } catch (error) {
    console.log("Error is", error.message);
  }
};
