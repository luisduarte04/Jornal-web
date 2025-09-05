import newsService from "../services/news.service.js"
import { generateToken } from "../utils/jwt.utils.js"


const getNews = async (req, res) => {
    try{
        const news = await newsService.getNews()
        if( !Array.isArray(news) || news.length == 0){
            return res.status(400).send("Não temos noticias no ar")
        }
        

        const updatedNews = news.map((item) => {
            const token = generateToken(item.userId); // Gera o JWT para o userId
            return { ...item, userId: token };
        });

        res.status(200).send({News: updatedNews})

    }catch(err){
        console.error("Erro ao buscar notícias:", err);
        res.status(500).send("Erro ao buscar notícias");
    }
}

const createNews = async(req, res) => {
    try{
        const {title, text, banner} = req.body
        const userId = req.userId
        const news = await newsService.createNews({
            title, 
            text, 
            banner, 
            userId
        })
        const token = generateToken(userId)
        const response = {
            ...news, userId: token
        }
        console.log(response)
        res.status(200).send(response);
        

    }catch(err){
        res.status(500).send("Erro ao criar notícias");
    }

}

export default {getNews, createNews}