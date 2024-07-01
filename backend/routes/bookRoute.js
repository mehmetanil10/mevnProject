import express from 'express';
import * as bookController from '../controllers/bookcontroller.js';
const router = express.Router();


router.get('/',bookController.getAllBooks);
router.post('/', bookController.createABook);
router.get('/:id', bookController.getABook);
router.put('/:id', bookController.updateABook);
router.delete('/:id', bookController.deleteABook);


export default router;