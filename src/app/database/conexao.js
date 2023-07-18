import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '',
    database: 'bdalunos'
})

conexao.connect()

export default conexao