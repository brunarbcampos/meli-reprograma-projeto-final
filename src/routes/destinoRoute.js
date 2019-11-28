const router = require("express").Router()
const controller = require("../controllers/destinoController")

//rotas
router.get("/", controller.getDestinos)
// router.get("/random", controller.getRandom)
router.get("/:clima", controller.getClima)
router.post("/", controller.postDestino)
router.put("/:cidade", controller.putDestino)
router.delete("/:cidade", controller.deleteDestino)

module.exports = router

