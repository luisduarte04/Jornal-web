import { prisma } from "../database/bd.js"

export const loginService = async (email) => {
    return await prisma.users.findUnique({
        where: { email: email}
    })
}

