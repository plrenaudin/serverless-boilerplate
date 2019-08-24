import mongoose from "mongoose";

export default mongoose.models.User ||
  mongoose.model(
    "User",
    mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      }
    })
  );
