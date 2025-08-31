import express from "express"
import userRoute from "./src/routes/users.route.js"
import authRoute from "./src/routes/auth.route.js"
import newsRoute from "./src/routes/news.route.js"
import {conectBd} from "./src/database/bd.js"

const app = express()
const port = 3000
app.use(express.json())
app.use("/user", userRoute)
app.use("/auth", authRoute)
app.use('/news', newsRoute)

app.listen(port, () => {
    console.log("Servidor rodando!")
    conectBd()
})

