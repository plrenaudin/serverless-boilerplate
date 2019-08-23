const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const model = mongoose.models.User || mongoose.model("User", userSchema);

export default model;
