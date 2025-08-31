import {Router} from "express"
import newsController from "../controllers/news.controller.js"

const newsRoute = Router()


newsRoute.get("/", newsController.getNews)
newsRoute.post("/", newsController.createNews)


export default newsRoute