import express from "express"
import route from "./src/routes/users.route.js"
import {conectBd} from "./src/database/bd.js"

const app = express()
const port = 3000
app.use(express.json())
app.use("/user", route)

app.listen(port, () => {
    console.log("Servidor rodando!")
    conectBd()
})

