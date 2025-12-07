import brcypt from "bcrypt";
import UserModel from "../models/user.model.js";
import jwt from "jsonwebtoken"

const AuthMiddleware = async (req, res,next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Token not found",
    });
  }
  try {
    const decoded = await jwt.verify(
      token,
      process.env.JWT_SECRET
    );
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid Token",
      });
    }
    const user = await UserModel.findById(decoded.id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    req.user = user;
    next();
  } catch (error) 
  {
    console.log(error);
    
    return res.status(400).json({
        message:"error in auth middleware"
    })
  }
};


export default AuthMiddleware