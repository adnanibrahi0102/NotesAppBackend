import express from 'express';
import { DeleteNoteController, UpdateNoteController, createNoteController, getAllNotesController, getSingleNoteController } from '../controllers/noteController.js';

const router=express.Router();
//creating note route
router.post('/create-note',createNoteController);
//updating note route
router.put('/update-note/:id',UpdateNoteController);
//deleteing note route
router.delete('/delete-note/:id',DeleteNoteController);
//get single note route
router.get('/getsingle-note/:id',getSingleNoteController);
//get all notes route
router.get('/getAll-Notes/:userId',getAllNotesController);
export default router;