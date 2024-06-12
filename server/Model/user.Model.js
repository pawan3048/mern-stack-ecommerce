import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: { type: String },
    category: { type: String },
    price: { type: Number },
    image: { type: Array },
  },
  { 
    timestamps: true
  }
);

const userModel = mongoose.model("user", Schema);

export default userModel;
