import mongoose from "mongoose";

const connectDB = (handler) => async  (req, res) => {
  if (mongoose.connection.readyState) {
    return handler(req, res);
  }

  await mongoose.connect("mongodb://localhost:27017/codeSwear", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
  return handler(req, res);
};



export default connectDB