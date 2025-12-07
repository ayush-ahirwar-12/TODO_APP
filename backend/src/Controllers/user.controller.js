import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import cacheClient from "../services/cache.service.js";

const UserRegisterController = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      res.status(400).json({
        message: "All fields are required",
      });
    }
    const UserAlreadyExists = await UserModel.findOne({ email });
    if (UserAlreadyExists) {
      return res.status(400).json({
        message: "User already exist",
      });
    }
    const HashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({
      fullName,
      email,
      password: HashedPassword,
    });
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.cookie("token", token);
    return res.status(201).json({
      message: "User Created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "error in creating user",
    });
  }
};

const UserLoginController = async (req, res) => {
try{  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  const IsPasswordValid = await bcrypt.compare(password,user.password);
  if(!IsPasswordValid){
    return res.status(402).json({
        message:"Invalid credentials"
    })
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("token",token);
  return res.status(200).json({message:"user login successful"})}
  catch(error){
    console.log("error in login controller");
    res.status(401).json({
        message:"error in user login"
    })
    
  }
};

const UserLogoutController = async(req,res)=>{
    const token = req.cookies.token;
    if(!token){
        res.status(404).json({
            message:"token not found"
        })
    }    
    // await cacheClient.set(token,"blacklisted");
    res.clearCookie("token");
    return res.status(200).json({
        message:"User logout successfully"
    })
}
 
export default { UserRegisterController , UserLoginController,UserLogoutController};
