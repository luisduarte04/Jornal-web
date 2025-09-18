import newsService from "../services/news.service.js"


const getNews = async (req, res) => {
    try {
        let { limit, offset } = req.query;
        limit = Number(limit);
        offset = Number(offset);
        if (!limit && !offset) {
            limit = 6;
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


        res.status(200).send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,
            results: news.map((item) => ({
                id: item.id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                createdAt: item.createdAt,
                userId: item.userId, 
                name: item.user.name,
                username: item.user.username,
                likes : item.likes,
                comments : item.comments
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
        // userId vem do token JWT através do middleware de autenticação
        const news = await newsService.createNews({
            title, 
            text, 
            banner, 
            userId
        })
        console.log(news)
        res.status(200).send(news);
        

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

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const news = await newsService.getById(id)
        if(!id){
            return res.status(400).send("News não encontrada")
        }
        res.status(200).send({
            News: {
                id: news.id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                createdAt: news.createdAt,
                comment: news.comments,
                like: news.likes,
                userId: news.userId, 
                name: news.user.name,
                username: news.user.username,
                password: news.user.password
            }
        })

    }catch(err){
        console.log(err)
        res.status(500).send("News não encontrada", err)
    }
}


const searchNews = async (req, res) => {
    try {
        const { title } = req.query;

        const serch = await newsService.searchNews(title);

        if (!serch || serch.length === 0) {
            return res.status(404).send("Nenhuma notícia encontrada");
        }

        res.status(200).send({
            results: serch.map((item) => ({
                id: item.id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                createdAt: item.createdAt,
                userId: item.userId,
                name: item.user.name,
                username: item.user.username,
            })),
        });
    } catch (err) {
        console.error("Erro ao buscar notícias:", err);
        res.status(500).send("Erro ao buscar notícias");
    }
};

const byUser = async (req, res) => {
    try{
        const id = req.userId
        const news = await newsService.byUser(id)
        if (!id) {
            return res.status(404).send("Nenhum ID");
        }
        res.status(200).send({
            results: news.map((item) => ({
                id: item.id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                createdAt: item.createdAt,
                userId: item.userId,
                name: item.user.name,
                username: item.user.username,
            })),
        });
    } catch(err){
        console.error("Erro ao buscar notícias:", err);
        res.status(500).send("Erro ao buscar notícias");
    }
}

const updateNews = async (req, res) => {
    try{
        const id = req.params.id
    const {title, text, banner} = req.body
    const news = await newsService.getById(id)
    if( news.userId != req.userId){
        console.log("Não pode atualizar a noticia")
        res.send("Não pode atualizar a noticia")
    }
    const update = await newsService.updateNews(id, {title, text, banner})
    res.status(200).send(update)
    }catch(err){
        console.log(err)
        res.send(err)
    }
    
}

const deleteNews = async (req, res) => {
    try{
        const id = req.params.id
        const news = await newsService.getById(id)
        if(!news){
            console.log("News não existe")
            res.send("News não existe")
        }
        if( news.userId != req.userId){
        console.log("Não pode deletar a noticia")
        res.send("Não pode deletar noticia")
    }
        const deleteNews = await newsService.deleteNews(id)
        res.status(200).send({deletado: deleteNews})
    }catch(err){
        console.log("erro: ", err)
        res.send(err)
    }

}

const likeNew = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.userId;

        const newsLike = await newsService.likeNew(id, userId);
        console.log("Like OK: ", newsLike)
        res.status(200).send({like: newsLike});
    } catch (err) {
        console.error("Erro ao dar like:", err.message);
        res.status(400).send({ error: err.message });
    }
};


const addComment = async (req, res) => {
    try{
        const id = req.params.id
        const userId = req.userId
        const comment = req.body
        if(!comment){
            console.log("Sem comentário")
            res.send("Sem comentário")
        }
    const newsComment = await newsService.addComment(id, userId, comment)
    console.log(newsComment)
    res.send(newsComment)
    }catch(err){
        console.log(err)
    }
    
}

const deleteComment = async (req, res) => {
    try{
    const idNews = req.params.id
    const idComment = req.params.idComment;
    const userId = req.userId;
    const deleted = await newsService.deleteComment(idNews, idComment, userId);

    if (!deleted) {
      return res.status(403).send("Você não pode deletar este comentário");
    }
    console.log("Deletado o comentário")
    res.send({ message: "Comentário deletado com sucesso!" });
        
    } catch(err) {
        console.log(err);
        res.status(500).send("Erro ao deletar comentário");
    }}

export default {getNews, createNews, topNews, getById, searchNews, byUser, updateNews, deleteNews, likeNew, addComment, deleteComment}