import userNotesModel from "../models/userNotesModel.js";
export const createNoteController = async (req, res) => {
  try {
    const { title, content, user } = req.body;
    if (!title || !content || !user) {
      return res.status(400).send({
        success: false,
        message: "Please fill all the fields"
      });
    }
    const note = new userNotesModel({
      title,
      content,
      user,
    });
    await note.save();
    res.status(201).send({
      success: true,
      message: "Note created successfully",
      note,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while creating note",
      error,
    });
  }
};


export const UpdateNoteController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title && !content) {
      return res.status(400).send({
        success: false,
        message: "Please fill all the fields",
      });
    }
    const updatedNote = await userNotesModel.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) {
      return res.status(404).send({
        success: false,
        message: "Note not found",
      });
    }
    console.log(updatedNote);
    res.status(200).send({
      success: true,
      message: "Note updated successfully",
      updatedNote,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while updating note",
      error,
    });
  }
};

export const DeleteNoteController = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteNote = await userNotesModel.findByIdAndDelete(id);
    if (!deleteNote) {
      return res.status(404).send({
        success: false,
        message: "Note not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Note deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while deleting note",
      error,
    });
  }
};

export const getSingleNoteController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received Id:", id);
    const note = await userNotesModel.findOne({ _id: id });
    if (!note) {
      return res.status(404).send({
        success: false,
        message: "Note not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Note fetched successfully",
      note,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while getting all notes",
      error,
    });
  }
};

export const getAllNotesController = async (req, res) => {
  try {
    const notes = await userNotesModel.find({});
    if (!notes || notes.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Notes not found",
      });
    }
    res.status(200).send({
      success: true,
      message: "Notes fetched successfully",
      notes,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error while getting all notes",
      error,
    });
  }
};
