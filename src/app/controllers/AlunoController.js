import AlunoRepository from '../repositories/AlunoRepository.js'


class AlunoController {

    async index(req, res) {
        const row = await AlunoRepository.findAll() // Aguarde o tempo de resposta da requisição para não exibir dados vazios ou nulos
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await AlunoRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        try {
            const aluno = req.body
            const row = await AlunoRepository.create(aluno)
            res.json(row)
        }
        catch (e) {
            res.status(400).json("Error")
        }
        
    }

    async update(req, res) {
        // Criar validação caso o id não exista
        const id = req.params.id
        const aluno = req.body
        const row = await AlunoRepository.update(aluno, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await AlunoRepository.delete(id)
        res.json(row)
    }

}

export default new AlunoController
