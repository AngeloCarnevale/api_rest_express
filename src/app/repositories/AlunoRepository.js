import conexao from '../database/conexao.js'

class AlunoRepository {
    //CRUD
    create(aluno){
        const sql = "INSERT INTO alunos SET ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, aluno, (erro, resultado) => {
                if(erro) {
                    return reject('Não foi possível localizar')
                }
                else {
                    // Fazer o parse dos resultados
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                }
            })
        })
    }

    findAll() {
        const sql = "SELECT * FROM alunos"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if(erro) {
                    return reject('Não foi possível localizar')
                }
                else {
                    // Fazer o parse dos resultados
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                }
            })
        })
    }

    findById (id){
        const sql = "SELECT * FROM alunos WHERE id=?"

        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) {
                    return reject('Não foi possível localizar')
                }
                else {
                    // Fazer o parse dos resultados
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                }
            })
        })
    }
    update(aluno, id){
        const sql = "UPDATE alunos SET ? WHERE id=?"

        return new Promise((resolve, reject) => {
            conexao.query(sql, [aluno, id], (erro, resultado) => {
                if(erro) {
                    return reject('Não foi possível atualizar')
                }
                else {
                    // Fazer o parse dos resultados
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                }
            })
        })
    }
    delete(id){
        const sql = "DELETE FROM alunos WHERE id=?"

        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if(erro) {
                    return reject('Não foi possível apagar')
                }
                else {
                    // Fazer o parse dos resultados
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                }
            })
        })
    }
}

export default new AlunoRepository()