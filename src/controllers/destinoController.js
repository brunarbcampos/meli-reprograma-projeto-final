const model = require("../model/destinoModel")


//getDestinos
//getRandom
//getClima

exports.postDestino = (req, res) => {
    let destino = new model (req.body);
    
    destino.save(function (err) {
    if (err) res.status(500).send(err);
    res.status(201).send(destino);
    })
}

//putDestino
//deleteDestino