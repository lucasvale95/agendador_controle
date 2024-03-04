import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose.connection.setMaxListeners(50);

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 300000,
    })
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.log(error));
};

export default { connectDatabase };
