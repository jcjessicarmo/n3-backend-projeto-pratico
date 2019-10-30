const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
    const tarefaslista = tarefas.map(item => {
       item.id >= 1 
       return item
    })
    res.status(200).send(tarefaslista)
}

    exports.getById = (req, res) => {
        const id = req.params.id
        res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
        
      }
