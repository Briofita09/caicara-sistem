import mongoose from "mongoose";
const { model, Schema } = mongoose;

const typeServiceSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("TypeService", typeServiceSchema);
