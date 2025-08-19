import {prisma} from "../database/bd.js"

const createUser = (data) => {
    return prisma.users.create({data})
}



const getUsers = () => {
    return prisma.users.findMany()
}



export default {createUser, getUsers}