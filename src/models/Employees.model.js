import mongoose from "mongoose";
const { model, Schema } = mongoose;

const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    position: String,
  },
  { timestamps: true }
);

export default model("Employee", employeeSchema);
