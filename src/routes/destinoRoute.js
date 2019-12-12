const router = require("express").Router()
const controller = require("../controllers/destinoController")

//rotas
/**
 * @api {get} /destinos Rota que traz todos os destinos cadastrados
 * @apiName getDestinos
 * @apiGroup Destinos
 *
 * @apiParam {Todos} os destinos cadastrados.
 *
 * @apiSuccess {String} lista de destinos total
 * @apiSuccess {String} lista todos os destinos 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "cidade": "nome da cidade",
 *       "estado": "nome do estado",
 *       "clima": "tipo de clima",
 *       "pontosTuristicos": "nome do atrativo",
 *     }
 *
 * @apiError DestinoNotFound No destination found in this route get
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "DestinoNotFound"
 *     }
 */
router.get("/", controller.getDestinos)
/**
 * @api {get} /destinos/random Rota que traz um destino aleatório
 * @apiName getRandom
 * @apiGroup Destinos
 *
 * @apiParam {Todos} percorre todos os destinos e traz um destino aleatório
 *
 * @apiSuccess {String} mostra uma array de destino
 * @apiSuccess {String} lista um destino aleatório 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "cidade": "nome da cidade",
 *       "estado": "nome do estado",
 *       "clima": "tipo de clima",
 *       "pontosTuristicos": "nome do atrativo",
 *     }
 *
 * @apiError DestinoNotFound No destination found in this route get
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "DestinoNotFound"
 *     }
 */
router.get("/random", controller.getRandom)
router.get("/:clima", controller.getClima)
router.get("/estado/:estado", controller.getEstado)
router.post("/", controller.postDestino)
router.put("/:cidade", controller.putDestino)
router.delete("/:cidade", controller.deleteDestino)

module.exports = router

