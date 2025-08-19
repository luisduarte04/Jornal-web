import express from "express"
import controlle from "../controllers/users.controller.js"
import middlawares from "../middlewares/users.middleware.js"

const route = express.Router()

route.post("/user", middlawares.validateUser ,controlle.createUser)

route.get("/users", controlle.getUsers)

export default route