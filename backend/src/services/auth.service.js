import { prisma } from "../database/bd.js"
import jwt from "jsonwebtoken"

export const loginService = async (email) => {
    return await prisma.users.findUnique({
        where: { email: email}
    })
}

export const generateToken = (id) => {
    return jwt.sign({id: id}, process.env.JWT)
}