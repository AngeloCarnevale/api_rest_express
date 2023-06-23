import express from 'express'
import routes from './routes.js'

const app = express()

// Usar o router
app.use(routes)

app.use(express.json()) // Indicar para o express ler body com JSON

export default app //Exportar o app
