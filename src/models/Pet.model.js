import mongoose from "mongoose";
const { model, Schema } = mongoose;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    genre: {
      type: String,
      required: true,
      enum: ["male", "female"],
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
    foodType: {
      type: String,
      enum: ["natural", "racao"],
    },
    typeServices: [
      {
        type: Schema.Types.ObjectId,
        ref: "TypeService",
      },
    ],
    services: [
      {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    ],
    tutor: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tutor",
      },
    ],
    description: String,
  },
  { timestamps: true }
);

export default model("Pet", petSchema);
