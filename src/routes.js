import { Router } from "express";
import AlunoController from "./app/controllers/AlunoController.js"
import UserContoller from "./app/controllers/UserContoller.js";

const router = Router()

// Rotas
router.get('/alunos', AlunoController.index)
router.get('/alunos/:id', AlunoController.show)
router.post('/alunos', AlunoController.store)
router.put('/alunos/:id', AlunoController.update)
router.delete('/alunos/:id', AlunoController.delete)

router.get('/users', UserContoller.index)
router.get('/users/:id', UserContoller.show)
router.post('/users/', UserContoller.store)
router.put('/users/:id', UserContoller.update)
router.delete('/users/:id', UserContoller.delete)

export default router