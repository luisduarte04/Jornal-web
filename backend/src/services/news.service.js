import {prisma} from "../database/bd.js"

const getNews =  () => {
    return  prisma.news.findMany()
}

const createNews = async (data) => {
    const { title, text, banner, userId } = data;
    return await prisma.news.create({
        data: { title, text, banner, userId}
    })
}

export default {getNews, createNews}