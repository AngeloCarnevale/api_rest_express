import UserRepository from "../repositories/UserRepository.js";

class UserController {

    async index(req, res) {
        const row = await UserRepository.findAll() // Aguarde o tempo de resposta da requisição para não exibir dados vazios ou nulos
        res.json(row)
    }

    async show(req, res) {
        const id = req.params.id
        const row = await UserRepository.findById(id)
        res.json(row)
    }

    async store(req, res) {
        try {
            const user = req.body
            const row = await UserRepository.create(user)
            res.json(row)
        } catch(e) {
            res.status(400).json("Error")
        }
        
    }

    async update(req, res) {
        // Criar validação caso o id não exista
        const id = req.params.id
        const user = req.body
        const row = await UserRepository.update(user, id)
        res.json(row)
    }

    async delete(req, res) {
        const id = req.params.id
        const row = await UserRepository.delete(id)
        res.json(row)
    }

}

export default new UserController