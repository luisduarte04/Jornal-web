import userService from "../services/users.service.js"

const createUser = async (req, res) =>{
    try{   
        const {name, username, email} = await userService.createUser(req.body)
        res.status(201).send({
            name,
            username,
            email,
        })
    }catch(err){
        res.status(500).send("Erro")
        console.error("Erro:  ", err)
    }
} 

const getUsers = async (req, res) => {
    try{
        const users = await userService.getUsers()
        const filterUsers = users.map(({id, name, username, email}) => ({id, name, username, email}))
        console.log("Buscamos os usuários")
        res.status(200).send(filterUsers)
    }catch(err){
        res.status(404).send("Não conseguimos puxar os dados")
        console.log("erro ao getUsers", err)
    }
}

const getByID = async (req, res) => {
    const { id } = req.params
    try{
        const user = await userService.findById(id)
        if (!user) {
            return res.status(404).send({ message: "Usuário não encontrado" })
        }
        const {name, username, email} = user
        res.status(200).send({name, username, email})
    }catch(err){
        res.status(400).send("Não existe id", err)
    }

}

const updateUser = async (req, res) => {
    const id = req.params.id
    const data = req.body
    try{
        const user = await userService.findById(id)
        if (!user) {
            return res.status(404).send({ message: "Usuário não encontrado" })
        }
        const updatedUser = await service.updateUser(id, data)
        const {name, username, email} = updatedUser
        res.status(200).send({name, username, email})
    }catch(err){
        res.status(400).send("Não foi possível atualizar o usuário", err)
    }
}

export default {createUser, getUsers, getByID, updateUser}