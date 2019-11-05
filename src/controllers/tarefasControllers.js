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


// ADD COLABORADOR

 exports.getByName = (req, res) => {
    const nomeColaborador = req.params.nomeColaborador
    console.log(nomeColaborador)
    const nome = tarefas.filter(tarefa => tarefa.nomeColaborador == nomeColaborador)
    if(nome.length == 0){
        
        res.sendStatus(404)
  }else{
          
  res.status(200).send(nome)
        }
}

// ADD CONCLUSAO
 
exports.getByConcluido = (req, res) => {
    const concluidos = tarefas.filter(tarefa => tarefa.conclusao === "true")


    console.log(concluidos)
         res.status(200).send(concluidos)

}

// DATA

const conversonData = (dataString) => {
    const dia = dataString.split("/")[0];
    const mes = dataString.split("/")[1] -1;
    const ano = dataString.split("/")[2];
    
    const dataFormatada = new Date (ano, mes, dia)
    return dataFormatada
}

const diferenceDias = (dataInicial, dataFinal) => {
    const diferencaTempo = Math.abs(dataFinal - dataInicial)
    const diferencaDias = Math.ceil(diferencaTempo / (1000*60*60*24))
    return diferencaDias
}

// CONTINUAR DATAAAAAA
