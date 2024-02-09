import express from 'express';
import { UpdateNoteController, createNoteController } from '../controllers/noteController.js';

const router=express.Router();
//creating note route
router.post('/create-note',createNoteController);
//updating note route
router.put('/update-note/:id',UpdateNoteController)
export default router;