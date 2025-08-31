import {prisma} from "../database/bd.js"
import bcryypt from "bcrypt"

const createUser = async (data) => {
    const hashedPassword = await bcryypt.hash(data.password, 10)
    return prisma.users.create({
        data: {
            ...data,
            password: hashedPassword
        }
    });
}



const getUsers = () => {
    return prisma.users.findMany()
}

const findById = (id) => {
    return prisma.users.findUnique({
        where: {id : Number(id)}
    }
    )
}

const updateUser = (id, data) => {
    return prisma.users.update({
        where: { id: Number(id) },
        data
    })
}

export default {createUser, getUsers, findById, updateUser}