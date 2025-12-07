import express from "express";
import notesController from "../Controllers/notes.controller.js"
import AuthMiddleware from "../middlewares/auth.middleware.js";
const router = express();

router.post("/createnote",AuthMiddleware,notesController.CreateNoteController)
router.post("/updatenote/:id",AuthMiddleware,notesController.UpdateNoteController)




export default router;