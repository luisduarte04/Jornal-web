import {PrismaClient} from "@prisma/client"

export const prisma = new PrismaClient()

export const conectBd = async () => {
    try{
        await prisma.$connect()
        console.log("Conectado ao banco de dados")
    } catch(err){
        console.log("Erro ao conectar ao BD ", err)
    }
}


