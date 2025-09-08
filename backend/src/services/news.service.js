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


const getById = (id) => {
    return prisma.news.findUnique({
        where: { id: Number(id)},
        include: {
            user: true
        },
    })
}


const searchNews = (title) => {
    return prisma.news.findMany({
        where: {
            title: {
                contains: title,
            },
        },
        include: { user: true },
        orderBy: { id: "desc" },
    });
};

const byUser = (id) => {
    return prisma.news.findMany({
        where: {userId: id},
        include: { user: true },
        orderBy: { id: "desc" }
    }
    )

}

const updateNews = (id, data) => {
    return prisma.news.update({
        where: { id: Number(id) },
        data: {
            title: data.title,
            text: data.text,
            banner: data.banner,
        },
    });
}

const deleteNews = (id) => {
    return prisma.news.delete({
        where: { id: Number(id)}
    })
}

const likeNew = async (id, userId) => {
    const news = await prisma.news.findUnique({
        where: {id: Number(id)},
        select: {likes: true}
    })

    const likes = news.likes || []
    const hasLiked = likes.some((like) => like.userId === userId)

    //remover o like, caso já tenha
    if(hasLiked){
        console.log("User já deu like, removendo...")
        const deleteLike = likes.filter((like) => like.userId !== userId)
        return await prisma.news.update({
            where: {id: Number(id)},
            data: { likes: deleteLike }
        })
    }

    const newLike = {userId, created: new Date()}
    likes.push(newLike)

    return await prisma.news.update({
        where: {id: Number(id)},
        data: {likes}
    })

}




export default {getNews, createNews, countNews, topNews, getById, searchNews, byUser, updateNews, deleteNews, likeNew}