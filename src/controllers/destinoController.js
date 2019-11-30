const model = require("../model/destinoModel")

//getDestinos
exports.getDestinos = (req, res) => {
    model.find(function (err, destinos) {
    if (err) res.status(500).send(err);
    res.status(200).send(destinos);
    });
}
  
//getRandom
exports.getRandom = (req, res) => {
    model.count().exec(function (err, count) {

        // Get a random entry
        var random = Math.floor(Math.random() * count)
        model.findOne().skip(random).exec(
        function (err, result) {
        return res.status(200).send(result)
          })
      })
 }

//getClima
exports.getClima = (req, res) => {
    model.find({"clima": req.params.clima} ,function (err, destinosClima) {
    if (err) res.status(500).send(err);
    res.status(200).send(destinosClima);
    });
}

//getEstado
exports.getEstado = (req, res) => {
    model.find({"estado": req.params.estado} ,function (err, destinosEstado) {
    if (err) res.status(500).send(err);
    res.status(200).send(destinosEstado);
    });
}
  
//post
exports.postDestino = (req, res) => {
    let destino = new model (req.body);
    
    destino.save(function (err) {
    if (err) res.status(500).send(err);
    res.status(201).send(destino);
    })
}

//putDestino
exports.putDestino = (req, res) => {
    model.update(
        { "cidade": req.params.cidade },
        { $set: req.body },
        { upsert: true },
        function (err) {
            if (err) return res.status(500).send(err);
            res.status(200).send({ mensagem: "Atualizado com sucesso!" });
        })
}

//deleteDestino
exports.deleteDestino = (req,res) => {
    model.findOne({"cidade": req.params.cidade}, function (err, destinoDelete) {
     
    if (!destinoDelete) {
        return res.status(200).send({ message: "Infelizmente esse destino não foi encontrado!!!"});
    }
    destinoDelete.remove(function(err) {
        if(!err) res.status(200).send({ message: "Destino removido com sucesso!"});
    })
    });
}