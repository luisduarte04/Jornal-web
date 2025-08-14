import express from "express"
const app = express()
const port = 3000
app.get("/teste", (req, res) => {
    res.sen("Olá")
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})