import { Router } from 'express';
import LivroController from '../controllers/LivroController';

const router = new Router();

router.get('/', LivroController.index);
router.get('/q7', LivroController.indexQ7);

router.delete('/q8', LivroController.deleteQ8);
router.delete('/:id', LivroController.delete);

export default router;
