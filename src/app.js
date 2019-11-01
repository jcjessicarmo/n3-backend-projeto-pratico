const express = require("express")
const app = express()

//ROTAS
const index = require("./routes/index")
const tarefas = require("./routes/tarefasRoutes")
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Healders",
        "Origin, X-Requested-with, Content-Type, Accept")
        next()      
});

app.use("/", index)
app.use("/tarefas", tarefas)

module.exports = app


