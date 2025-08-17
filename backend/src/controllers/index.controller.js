import service from "../services/user.services.js"

const createUser = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body
    try{
        if(!name || !username || !email || !password){
            console.log("Está faltando dados")
            res.status(404).send("Está faltando dados")
        }
        const user = await service.createUser({
            name, username, email, password, avatar, background
        })
        res.status(200).send(user)

    } catch(err){
        console.log("erro", err)

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