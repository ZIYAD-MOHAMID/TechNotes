const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
