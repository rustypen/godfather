const mongoose = require('mongoose');

const connectDB = async()=>{
  try {
    const mongoURI = "mongodb+srv://projects:projects@cluster0.jw9m5.mongodb.net/godfather";
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };
    await mongoose.connect(mongoURI, options);
    console.log("Database Connected...");
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = connectDB;