import newsService from "../services/news.service.js"

const getNews = async (req, res) => {
    try{
        const news = await newsService.getNews()
        if( !Array.isArray(news) || news.length == 0){
            return res.status(400).send("Não temos noticias no ar")
        }
        res.status(200).send({News: news})

    }catch(err){
        res.status(500).send("Erro ao buscar notícias");
    }
}

const createNews = async(req, res) => {
    try{
        const news = await newsService.createNews(req.body)
        res.status(200).send(news)
        

    }catch(err){
        res.status(500).send("Erro ao criar notícias");
    }

}

export default {getNews, createNews}