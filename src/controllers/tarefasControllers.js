const professoras = require("../model/tarefas.json")

exports.get = (req, res) => {
    const profSemCpf = professoras.map(item => {
        item.cpf = "***********"
        return item
    })
    res.status(200).send(profSemCpf)
}

exports.getById =(req, res) => {
    const id = req.params.id
    const prof = professoras.find(prof=> prof.id = id)
    delete prof.cpf
    res.status(200).send(prof)
}

// ERRADOOO APAGAR CPF E ARRUMAR O QUE FALTA 