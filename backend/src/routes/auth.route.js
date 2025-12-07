import express from "express";
import AuthController from "../Controllers/user.controller.js"
import AuthMiddleware from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/register",AuthController.UserRegisterController);
router.post("/login",AuthController.UserLoginController);
router.post("/logout",AuthMiddleware,AuthController.UserLogoutController)


















export default router;