import express from 'express'
import conexao from './app/database/conexao.js'
import AlunoController from './app/controllers/AlunoController.js'

const app = express()
app.use(express.json()) // Indicar para o express ler body com JSON


// Retornar o objeto por id
function buscarAlunoPorId(id) {
    return alunos.filter(aluno  => aluno.id == id) // Filtrar alunos por id
}

// Pegar a posição ou index do aluno no array pelo id
function buscaIndexAluno(id) {
    return alunos.findIndex(aluno => aluno.id == id) 
}

// Rotas
app.get('/alunos', AlunoController.index)
app.get('/alunos/:id', AlunoController.show)
app.post('/alunos', AlunoController.store)
app.put('/alunos/:id', AlunoController.update)
app.delete('/alunos/:id', AlunoController.delete)

export default app //Exportar o app
