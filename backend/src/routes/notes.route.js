import express from "express";
import notesController from "../Controllers/notes.controller.js"
import AuthMiddleware from "../middlewares/auth.middleware.js";
const router = express();

router.post("/createnote",AuthMiddleware,notesController.CreateNoteController)
router.post("/updatenote/:id",AuthMiddleware,notesController.UpdateNoteController)
router.post("/deletenote/:id",AuthMiddleware,notesController.DeleteNoteController)
router.get("/fetchnote",AuthMiddleware,notesController.FetchUserNotesController)




export default router;