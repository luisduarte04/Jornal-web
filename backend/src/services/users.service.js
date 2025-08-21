import {prisma} from "../database/bd.js"

const createUser = (data) => {
    return prisma.users.create({data})
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