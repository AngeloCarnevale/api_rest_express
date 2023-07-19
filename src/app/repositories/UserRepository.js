import conexao from '../database/conexao.js'

class UserRepository {
    //CRUD
    create(usuario) {
        const sql = "INSERT INTO usuarios SET ?"
        return new Promise((resolve, reject) => {
            conexao.query(sql, usuario, (erro, resultado) => {
                if (erro) {
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
        const sql = "SELECT * FROM usuarios"
        return new Promise((resolve, reject) => {
            conexao.query(sql, (erro, resultado) => {
                if (erro) {
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

    findById(id) {
        const sql = "SELECT * FROM usuarios WHERE id=?"

        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) {
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
    update(usuario, id) {
        const sql = "UPDATE alunos SET ? WHERE id=?"

        return new Promise((resolve, reject) => {
            conexao.query(sql, [usuario, id], (erro, resultado) => {
                if (erro) {
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
    delete(id) {
        const sql = "DELETE FROM usuarios WHERE id=?"

        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) => {
                if (erro) {
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

export default new UserRepository()