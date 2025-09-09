import {Router} from "express"
import newsController from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const newsRoute = Router()


newsRoute.get("/", newsController.getNews)
newsRoute.post("/", authMiddleware, newsController.createNews)
newsRoute.get("/top", newsController.topNews)
newsRoute.get("/search", newsController.searchNews)
newsRoute.get("/byUser", authMiddleware,  newsController.byUser)
newsRoute.get("/:id",  newsController.getById)
newsRoute.patch("/:id", authMiddleware, newsController.updateNews)
newsRoute.delete("/:id", authMiddleware, newsController.deleteNews)
newsRoute.patch("/like/:id", authMiddleware, newsController.likeNew)
newsRoute.patch("/comment/:id", authMiddleware, newsController.addComment)
newsRoute.delete("/:id/comment/:idComment", authMiddleware, newsController.deleteComment)


export default newsRoute 