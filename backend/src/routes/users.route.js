import express from "express"
import controlle from "../controllers/users.controller.js"
import middlawares from "../middlewares/users.middleware.js"

const route = express.Router()

route.post("/", middlawares.validateUser ,controlle.createUser)

route.get("/", controlle.getUsers)

route.get("/:id", middlawares.validatorId , controlle.getByID)

route.patch("/:id", middlawares.validatorId , controlle.updateUser)

export default route