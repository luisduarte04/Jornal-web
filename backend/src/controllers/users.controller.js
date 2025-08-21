import service from "../services/users.service.js"

const createUser = async (req, res) =>{
    try{   
        const user = await service.createUser(req.body)
        res.status(201).send(user)
    }catch(err){
        res.status(500).send("Erro")
        console.error("Erro:  ", err)
    }
}

const getUsers = async (req, res) => {
    try{
        const users = await service.getUsers()
        console.log("Buscamos os usuários")
        res.status(200).send(users)
    }catch(err){
        res.status(404).send("Não conseguimos puxar os dados")
        console.log("erro ao getUsers", err)
    }
}

const getByID = async (req, res) => {
    const id = req.params.id
    try{
        const user = await service.findById(id)
        if (!user) {
            return res.status(404).send({ message: "Usuário não encontrado" })
        }
        res.status(200).send(user)
    }catch(err){
        res.status(400).send("Não existe id", err)
    }

}

const updateUser = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try{
        const user = await service.findById(id)
        if (!user) {
            return res.status(404).send({ message: "Usuário não encontrado" })
        }
        const updatedUser = await service.updateUser(id, data)
        res.status(200).send(updatedUser)
    }catch(err){
        res.status(400).send("Não foi possível atualizar o usuário", err)
    }
}

export default {createUser, getUsers, getByID, updateUser}