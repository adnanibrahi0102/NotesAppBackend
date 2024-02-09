import userNotesModel from "../models/userNotesModel.js";
export const createNoteController = async (req, res) => {
  try {
    const { title, content, user } = req.body;
    if (!title || !content || !user) {
      return res.status(400).send({
        success: false,
        message: "Please fill all the fields",
        error,
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
