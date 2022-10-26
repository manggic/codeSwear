// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongoose";
import Product from "../../models/Product";

const handler = async (req, res) => {
  const data = await Product.find({ category: "tshirt" });
  res.status(200).json({ data });
};

export default connectDB(handler);
