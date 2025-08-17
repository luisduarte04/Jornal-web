import {prisma} from "../database/bd.js"

const createUser = ({name, username, email, password, avatar, background}) => {
    return prisma.users.create({
        data: {name, username, email, password, avatar, background}
    })
}

const getUsers = () => {
    return prisma.users.findMany()
}

export default {createUser, getUsers}