// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDB from "../../middleware/mongoose";
import Product from "../../models/Product";

const handler = async (req, res) => {
  // try {
  //   if (req.method === "POST") {
  //     for (let i = 0; i < req.body.length; i++) {
  //       let p = new Product({
  //         title: req.body[i].title,
  //         desc: req.body[i].desc,
  //         slug: req.body[i].slug,
  //         img: req.body[i].img,
  //         category: req.body[i].category,
  //         price: req.body[i].price,
  //         availableQty: req.body[i].availableQty,
  //         color: req.body[i].color,
  //         size: req.body[i].size,
  //       });

  //       await p.save();
  //     }

  //     return res.status(200).json({ success: true });
  //   }

  //   res.status(200).json({ error: true, msg: "Get method is not allowed" });
  // } catch (error) {
  //   res.status(401).json({ error: true, msg: error });
  // }








    if (req.method === "POST") {
      for (let i = 0; i < req.body.length; i++) {
        let p = new Product({
          title: req.body[i].title,
          desc: req.body[i].desc,
          slug: req.body[i].slug,
          img: req.body[i].img,
          category: req.body[i].category,
          price: req.body[i].price,
          availableQty: req.body[i].availableQty,
          color: req.body[i].color,
          size: req.body[i].size,
        });

        await p.save();
      }

      return res.status(200).json({ success: true });
    }

    res.status(200).json({ error: true, msg: "Get method is not allowed" });
    // res.status(401).json({ error: true, msg: error });
};

export default connectDB(handler);
