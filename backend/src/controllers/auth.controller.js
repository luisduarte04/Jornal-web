import bcrypt from "bcrypt"
import { loginService, generateToken } from "../services/auth.service.js"



export const login = async(req, res) => {
    try{
        const {email, password} = req.body
        const user = await loginService(email)
        if(!user){
            return res.status(401).send("Usuário ou senha inválido")
        }
        const passwordisValid =  bcrypt.compareSync(password, user.password)
        if(!passwordisValid){
            return res.status(401).send("Usuário ou senha inválido ")
        }
        const token = generateToken(user.id)
        console.log(token)
        console.log(`Usuário logou no sistema ${user.name}, email: ${user.email}`)
        return res.status(200).send({token: token, nome: user.name, email: user.email})
    } catch(err){
        console.log("Erro: ", err)
    }
}
