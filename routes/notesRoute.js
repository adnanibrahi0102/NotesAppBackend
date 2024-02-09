import express from 'express';
import { createNoteController } from '../controllers/noteController.js';

const router=express.Router();

router.post('/create-note',createNoteController)

export default router;