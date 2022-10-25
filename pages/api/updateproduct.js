// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongoose";
import Product from "../../models/Product";

const handler = async (req, res) => {
  if (req.method === "POST") {
    for (let i = 0; i < req.body.length; i++) {
      await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
    }

    return res.status(200).json({ success: true });
  }

  res.status(200).json({ error: true });
};

export default connectDB(handler);
