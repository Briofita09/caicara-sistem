import mongoose from "mongoose";
const { model, Schema } = mongoose;

const userSchema = new Schema(
  {
    serviceId: {
      type: Schema.Types.ObjectId,
      ref: "TypeService",
    },
    petId: {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
