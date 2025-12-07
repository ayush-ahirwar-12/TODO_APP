import mongoose from "mongoose";

const connectDb = async () => {
try {
      await mongoose.connect("mongodb+srv://Mern14:t2hTOz5MLq8i7GLC@merncluster.kpebayd.mongodb.net/todo").then(() => {
    console.log("Database Connected");
  });
} catch (error) {
    console.log("error in connecting database",error);
    
}
};

export default connectDb;
