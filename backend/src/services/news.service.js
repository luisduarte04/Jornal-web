import {prisma} from "../database/bd.js"

const getNews =  (offset, limit) => {
    return  prisma.news.findMany({
        orderBy: {id: "desc"},
        skip: offset,
        take: limit,
        include: {
            user: true
        }
    })
}

const createNews = async (data) => {
    const { title, text, banner, userId } = data;
    return await prisma.news.create({
        data: { title, text, banner, userId}
    })
}

const countNews = () => {
    return prisma.news.count()
}

const topNews = () => {
    return prisma.news.findFirst({
        orderBy: {id: "desc"},
        include: {
            user: true
        }
    })
}

export default {getNews, createNews, countNews, topNews}