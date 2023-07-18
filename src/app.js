import express from 'express'
import routes from './routes.js'
import cors from 'cors'

const app = express()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

// Usar o router
app.use(routes)

app.use(express.json()) // Indicar para o express ler body com JSON

export default app //Exportar o app
