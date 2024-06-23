import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: String,
});

export default mongoose.model("Service", ServiceSchema);