import mongoose from "mongoose";

let isConnected;

export default () => {
  if (isConnected) {
    // reuse existing connection
    return Promise.resolve();
  }

  // Create new connection
  return mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(db => {
    isConnected = db.connections[0].readyState;
  });
};
