import express from "express"
import userController from "../controllers/users.controller.js"
import userMiddleware from "../middlewares/users.middleware.js"

const userRoute = express.Router()

userRoute.post("/", userMiddleware.validateUser, userController.createUser)


userRoute.get("/", userController.getUsers)

userRoute.get("/:id", userMiddleware.validatorId , userController.getByID)

userRoute.patch("/:id", userMiddleware.validatorId , userController.updateUser)

export default userRoute  