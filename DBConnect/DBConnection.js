const mongoose = require("mongoose");

const DBConnection = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Athena:20172522@cluster0.ghheiye.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB is Connected!"))
    .catch((error) => {
      console.log("Database connection Failed!!");
      console.log(error);
    });
};

module.exports = { DBConnection };
