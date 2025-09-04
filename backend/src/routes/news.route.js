import {Router} from "express"
import newsController from "../controllers/news.controller.js"
import { authMiddleware } from "../middlewares/auth.middleware.js"

const newsRoute = Router()


newsRoute.get("/", newsController.getNews)
newsRoute.post("/", authMiddleware, newsController.createNews)


export default newsRoute