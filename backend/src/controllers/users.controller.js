import service from "../services/users.service.js"

const createUser = async (req, res) =>{
    try{   
        const user = await service.createUser(req.body)
        res.status(200).send(user)
    }catch(err){
        res.status(500).send("Erro")
        console.error("Erro:  ", err)
    }
}

const getUsers = async (req, res) =>{
    const users = await service.getUsers()
    try{
        console.log("Buscamos os usuários")
        res.status(200).send(users)
    }catch(err){
        res.status(404).send("Não conseguimos puxar os dados")
        console.log("erro ao getUsers", err)
    }
}

export default {createUser, getUsers}