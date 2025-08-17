import {prisma} from "../database/bd.js"

const viewUser = async (req, res) => {
    const {name, username, email, password, avatar, background} = req.body
    try{
        if( !name || !username || !email || !password){
            res.status(404).send("Dados em falta!")
            console.log("Usuário não enviou todos os dados obrigatórios")
        }
        const user = await prisma.users.create({
            data: {name, username, email, password, avatar, background}
        })
        res.status(200).send(user)
    }catch(err){
        console.log("erro ao enviar", err)
    }
}

export default {viewUser}