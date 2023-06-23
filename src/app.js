import express from 'express'
import conexao from '../infra/conexao.js'

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
app.get('/alunos', (req, res) => {
    const sql = "SELECT * FROM alunos"
    conexao.query(sql, (error, resultado ) => {
        if (error){
            res.status(404).json({'erro': error})
        }
        else {
            res.status(200).json(resultado)
        }
    })
})

app.get('/alunos/:id', (req, res) => {
    const id = req.params.id
    const sql = "SELECT * FROM alunos WHERE id=?"

    conexao.query(sql, id, (error, resultado ) => {
        const linha = resultado[0] // A requisição sempre retorna um array porém de
        //um elemento só, por isso é definido o index 0

        if (error){
            res.status(404).json({'erro': error})
        }
        else {
            res.status(200).json(linha)
        }
    })
})

app.post('/alunos', (req, res) => {

    const aluno = req.body
    const sql = "INSERT INTO alunos SET ?"

    conexao.query(sql, aluno, (error, resultado ) => {
        if (error){
            res.status(400).json({'erro': error})
        }
        else {
            res.status(201).json(resultado)
        }
    })
})

app.delete('/alunos/:id', (req, res) => {
    const id = req.params.id
    const sql = "DELETE FROM alunos WHERE id=?"

    conexao.query(sql, id, (error, resultado ) => {

        if (error){
            res.status(404).json({'erro': error})
        }
        else {
            res.status(200).json(resultado)
        }
    })
})

app.put('/alunos/:id', (req, res) => {
    // Criar validação caso o id não exista
    const id = req.params.id
    const aluno = req.body
    const sql = "UPDATE alunos SET ? WHERE id=?"

    conexao.query(sql, [aluno, id], (error, resultado ) => {
        if (error){
            res.status(400).json({'erro': error})
        }
        else {
            res.status(201).json(resultado)
        }
    })
})


export default app //Exportar o app
