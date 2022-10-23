// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json({data:[123, 456, 789, 135, 246, 357,579], status:'success'})
  }
  