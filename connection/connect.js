import mongoose from "mongoose";

const database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected");
  } catch (err) {
    console.log("Error while connecting to the database : ", err);
  }
};

export default database;
 