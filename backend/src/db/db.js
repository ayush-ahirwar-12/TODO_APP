import mongoose from "mongoose";

const connectDb = async () => {
try {
      await mongoose.connect(process.env.MONGOOSE_URI).then(() => {
    console.log("Database Connected");
  });
} catch (error) {
    console.log("error in connecting database",error);
    
}
};

export default connectDb;
