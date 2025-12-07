import noteModel from "../models/notes.model.js";
import UserModel from "../models/user.model.js";

const CreateNoteController = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status({
        message: "content not found",
      });
    }
    const user = await UserModel.findById(req.user._id);
    const note = await noteModel.create({
      content,
      user_id: user._id,
    });
    user.notes.push(note._id);
    user.save();
    return res.status(201).json({
      message: "note created successfully",
    });
  } catch (error) {
    console.log("error in creating note", error);
    res.status(402).json({
      message: "error in creating note",
    });
  }
};

const UpdateNoteController = async (req, res) => {
  try {
    const note_id = req.params.id;
    const { content } = req.body;
    const note = await noteModel.findByIdAndUpdate(note_id, {
      content: content,
    });
    note.save();
    res.status(200).json({
      message: "Note updated successfully",
      note: note,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Error in Updating note",
    });
  }
};

const DeleteNoteController = async (req, res) => {
  try {
    const note_id = req.params.id;
    await noteModel.findByIdAndDelete(note_id);
    res.status(200).json({
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "error in deleting note",
    });
  }
};

const FetchUserNotesController = async (req, res) => {
  try {
    const { _id } = req.user;
    const currentLoggedinUserNotes = await UserModel.findById(_id).populate(
      "notes"
    );

    res.status(200).json({
      message: "note fetched successfully",
      currentLoggedinUserNotes,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "error in fetching note",
    });
  }
};

export default {
  CreateNoteController,
  UpdateNoteController,
  DeleteNoteController,
  FetchUserNotesController,
};
