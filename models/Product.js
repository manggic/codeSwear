import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    availableQty: { type: Number, required: true },
    color: { type: String },
    size: { type: String },
  },
  { timestamps: true }
);

mongoose.models = {};
module.exports = mongoose.model("Product", productSchema);
