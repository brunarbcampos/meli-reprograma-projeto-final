const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path")

const app = express()

mongoose.connect("mongodb+srv://bronx:bru771@cluster0-2q895.mongodb.net/test?retryWrites=true&w=majority",{userNewUrlParser: true});

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("Conexão feita com sucesso.");
})

//rotas
const destinos = require("./routes/destinoRoute")

app.use(cors());
app.use(bodyParser.json());

app.use("/destinos", destinos)

app.use(express.static('doc'))
app.get('/api-doc', (req, res) => {
  res.sendFile(path.join(__dirname + '/../doc/index.html'));
})

module.exports = app