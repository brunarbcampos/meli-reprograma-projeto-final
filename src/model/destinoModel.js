const mongoose = require("mongoose");

const destinosSchema = new mongoose.Schema({
    cidade: { type: String},
    estado: { type: String},
    clima: {type: String},
    pontosTuristicos:[{
        _id: false,
        nome: String,
    }]
}, {
    versionKey: false
})

const destinos = mongoose.model('Destinos', destinosSchema);

module.exports = destinos;

