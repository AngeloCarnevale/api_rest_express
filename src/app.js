import express from 'express'

const app = express()

// Mock
const alunos = [
    {id: 1, nome: 'Ângelo', turma: '1DST-B'},
    {id: 2, nome: 'Diego', turma: '1DST-B'},
    {id: 3, nome: 'Nicole', turma: '1DST-B'}
]

// Criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Curso de node.js')
})

app.get('/alunos', (req, res) => {
    res.send(alunos)
})

export default app //Exportar o app
