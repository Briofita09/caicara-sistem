import mongoose from "mongoose";
const { model, Schema } = mongoose;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    breed: String,
    size: {
      type: String,
      enum: ["pequeno", "medio", "grande"],
    },
    fur: {
      type: String,
      enum: ["pequeno", "medio", "grande"],
    },
    castrated: {
      type: Boolean,
      required: true,
    },
    foodRestriction: {
      type: Boolean,
      required: true,
    },
    description: String,
  },
  { timestamps: true }
);

export default model("Pet", petSchema);
