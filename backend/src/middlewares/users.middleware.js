
const validateUser = (req, res, next) => {
    const {name, username, email, password, avatar, background} = req.body
    if (!name || !username || !email || !password){
        res.status(404).send("Está faltando dados")
    }
    next()
}

export default {validateUser}