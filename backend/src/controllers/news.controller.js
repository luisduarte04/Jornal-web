
import newsService from "../services/news.service.js"
import { generateToken } from "../utils/jwt.utils.js"


const getNews = async (req, res) => {
    try {
        let { limit, offset } = req.query;
        limit = Number(limit);
        offset = Number(offset);
        if (!limit && !offset) {
            limit = 3;
            offset = 0;
        }
        const news = await newsService.getNews(offset, limit);

        if (!Array.isArray(news) || news.length === 0) {
            return res.status(400).send("Não temos noticias no ar");
        }

        const currentUrl = req.baseUrl;
        const total = await newsService.countNews();
        const next = offset + limit;
        const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;
        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?limit=${limit}&offset=${previous}` : null;


        const updatedNews = news.map((item) => {
            const token = generateToken(item.userId); 
            return { ...item, userId: token };
        });

        res.status(200).send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
            results: updatedNews.map((item) => ({
                id: item.id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                createdAt: item.createdAt,
                userId: item.userId, 
                name: item.user.name,
                username: item.user.username,
                password: item.user.password
            })),
        });
    } catch (err) {
        console.error("Erro ao buscar notícias:", err);
        res.status(500).send("Erro ao buscar notícias");
    }
}

const createNews = async(req, res) => {
    try{
        const {title, text, banner} = req.body
        const userId = req.userId
        const token = req.headers.authorization.split(" ")[1]
        const news = await newsService.createNews({
            title, 
            text, 
            banner, 
            userId
        })
        const response = {
            ...news, userId: token
        }
        console.log(response)
        res.status(200).send(response);
        

    }catch(err){
        console.log("Erro ao criar notícias", err)
        res.status(500).send("Erro ao criar notícias", err);
    }

}

const topNews = async(req, res) => {
    try{
        const news = await newsService.topNews()
        if(!news){
            return res.status(400).send({message: "Sem noticias"})
        }
        console.log
        res.status(200).send({
            
        News: {
                id: news.id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                createdAt: news.createdAt,
                userId: news.userId, 
                name: news.user.name,
                username: news.user.username,
                password: news.user.password
        }
    })
    } catch(err){
        console.log("Erro:", err)
        res.status(500).send("Erro:", err)
    }
}   

export default {getNews, createNews, topNews}