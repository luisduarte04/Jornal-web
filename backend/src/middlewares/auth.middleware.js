import dotenv, { config } from "dotenv"
import jwt from "jsonwebtoken"
import userService from "../services/users.service.js"

dotenv.config()

export const authMiddleware = (req, res, next) => {
    try{

        const {authorization} = req.headers
            if(!authorization){
                return res.status(400)
            }
            const parts = authorization.split(" ")
            const [schema, token] = parts
            if(schema != "Bearer" ){
                return res.status(400).send("Sem Bearer")
            }
            if (parts.length != 2){
                return res.status(400).send("Authorization com error")
            } 
    
    
            jwt.verify(token, process.env.JWT, (error, decoded) => {
                if(error){
                    console.log("Erro ao validar token jwt")
                    res.status(400).send("Erro ao validar token jwt")
                }
                console.log("JWT verificado: ", decoded)
            })
            next()
    }catch(error){
        console.log("Erro")
    }
}
