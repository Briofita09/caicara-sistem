import mongoose from "mongoose";
const { model, Schema } = mongoose;

const serviceSchema = new Schema(
  {
    typeServiceId: {
      type: Schema.Types.ObjectId,
      ref: "TypeService",
    },
    petId: {
      type: Schema.Types.ObjectId,
      ref: "Pet",
    },
    serviceDate: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

export default model("Service", serviceSchema);
