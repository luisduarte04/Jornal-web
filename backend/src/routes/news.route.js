import {Router} from "express"

const newsRoute = Router()


newsRoute.get("/", newsController.getNews)

export default newsRoute