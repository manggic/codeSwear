// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongoose";
import Product from "../../models/Product";

const handler = async (req, res) => {
  const data = await Product.find({ category: "tshirt" });
  let tshirt = {};

  console.log('dataa ?????',data, tshirt);

  // for (let item of data) {
  //   if (item.title in tshirt) {
  //     if (tshirt[item.title]?.color?.includes(item.color) && item.availableQty) {
  //       tshirt[item.title].color.push(item.color);
  //     }

  //     if (tshirt[item.title]?.size?.includes(item.size) && item.availableQty) {
  //       tshirt[item.title].size.push(item.size);
  //     }
  //   } else {
  //     tshirt[item.title] = item;
  //     if (item.availableQty) {
  //       tshirt[item.title].color = [item.color];
  //       tshirt[item.title].size = [item.size];
  //     }
  //   }

  //   console.log('tshirt ?????', tshirt);
  // }

  res.status(200).json({data });
};

export default connectDB(handler);
