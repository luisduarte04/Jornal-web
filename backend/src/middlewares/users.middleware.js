
const validateUser = (req, res, next) => {
    const {name, username, email, password, avatar, background} = req.body
    if (!name || !username || !email || !password){
        res.status(404).send("Está faltando dados")
    }
    next()
}

const validatorId = (req, res, next) => {
    const id = req.params.id
    if(!id || isNaN(Number(id))){
        console.error("Erro: ")
        return res.status(400).send({message: "Id inválido",});
    }
    next()
}



export default {validateUser, validatorId}