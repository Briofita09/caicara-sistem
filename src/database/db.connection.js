import mongoose from "mongoose";
import "dotenv/config";

const connectDb = async () => {
  const connection = await mongoose.connect(`${process.env.DATABASE_URL}`);
  console.log(`Connected to the database: ${connection.connections[0].name}`);
};

export default connectDb;
