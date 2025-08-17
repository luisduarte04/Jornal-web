import express from "express"
import controlle from "../controllers/index.controller.js"

const route = express.Router()

route.post("/user", controlle.createUser)

route.get("/users", controlle.getUsers)

export default route