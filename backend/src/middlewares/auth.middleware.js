import dotenv, { config } from "dotenv"
import jwt, { decode } from "jsonwebtoken"
import userController from "../controllers/users.controller.js"

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
    
    
            jwt.verify(token, process.env.JWT, async (error, decoded) => {
                try{

                    if(error){
                        console.log("Erro ao validar token jwt")
                        res.status(400).send("Erro ao validar token jwt")
                    }
                    console.log(decoded)
                    next()
                } catch(err){
                    console.log("Erro ao cadastrar news", err)
                    res.status(400).send("Erro ao cadastrar news", err)
                }
            })
            
    }catch(error){
        console.log("Erro")
    }
}
