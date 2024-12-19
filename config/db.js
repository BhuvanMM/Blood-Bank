const mongoose = require("mongoose");


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      'Databse connection was successful!'
    );
  } catch (error) {
    console.log('Failed to connect to database');
  }
};

module.exports = connectDB;
