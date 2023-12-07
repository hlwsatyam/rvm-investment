const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
const DBConnection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Athena:20172522@cluster0.ghheiye.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("Database is Connected!"))
    .catch(() => {
      console.log("Database connection Failed!");
    });
};

module.exports = { DBConnection };
