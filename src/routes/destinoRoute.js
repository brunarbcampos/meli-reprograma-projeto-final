const router = require("express").Router()
const controller = require("../controllers/destinoController")

//rotas
/**
 * @api {get} /destinos GET - todos os destinos cadastrados
 * @apiName getDestinos
 * @apiGroup Destinos
 * 
 * @apiParam {Get} Destinos Traz os destinos cadastrados
 *
 * @apiSuccess {String} GET Traz a lista de todos os destinos cadastrados
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
 */

router.get("/", controller.getDestinos)
/**
 * @api {get} /destinos/random GET - um destino aleatório
 * @apiName getRandom
 * @apiGroup Destinos
 *
 * @apiParam {Get} Destinos Mostra uma array de destino aleatório
 *
 * @apiSuccess {String} GET Mostra uma array de destino aleatório
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
 */
router.get("/random", controller.getRandom)
/**
 * @api {get} /destinos/:clima GET - destinos de um clima igual
 * @apiName getClima
 * @apiGroup Destinos
 *
 * @apiParam {Get} Destinos Traz os destinos pelo clima especificado na array
 *
 * @apiSuccess {String} GET Traz todos os destinos com o clima especificado
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
 * @apiError ClimaNotFound Clima não cadastrado 
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ClimaNotFound"
 *     }
 * 
 */
router.get("/:clima", controller.getClima)
/**
 * @api {get} /destinos/:estados get - destinos do mesmo Estado
 * @apiName getRandom
 * @apiGroup Destinos
 *
 * @apiParam {Get} Destinos percorre todos os destinos e traz todos com o estado em comum pedido
 *
 * @apiSuccess {String} GET mostra todos os arrays que possuem o mesmo estado
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
 * @apiError EstadoNotFound Nenhum estado encontrado
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "EstadoNotFound"
 *     }
 * 
 */
router.get("/estado/:estado", controller.getEstado)
/**
 * @api {post} /destinos POST - Insere um novo destino
 * @apiName getPost
 * @apiGroup Destinos
 * 
 * @apiParam {Post} Destinos Insere um array de um novo destino
 * 
 * @apiSuccess {Array} POST Insere um array de um novo destino
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       Novo destino inserido com sucesso!
 *     }
 *
 * @apiError DestinoExistent Destino já cadastrado
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "DestinoExistent"
 *     }
 * 
 */
router.post("/", controller.postDestino)
/**
 * @api {put} /destinos/putDestino PUT - atualiza um destino
 * @apiName putDestino
 * @apiGroup Destinos
 *
 * @apiParam {Put} Destinos Atualiza um destino específico
 *
 * @apiSuccess {String} atualiza uma array específica
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       Destino atualizado com sucesso!
 *     }
 *
 * @apiError DestinoNotFound Destino não encontrado
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "DestinoNotFound"
 *     }
 * 
 */
router.put("/:cidade", controller.putDestino)
/**
 * @api {delete} /destinos/deleteDestino DELETE - apaga um destino aleatório
 * @apiName deleteDestino
 * @apiGroup Destinos
 *
 * @apiParam {Delete} Destinos Deleta um destino específico
 * 
 * @apiSuccess {String} DELETE deleta um destino específico
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "destino excluído com sucesso"
 *     }
 *
 * @apiError DestinoNotFound Nenhum destino encontrado
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "DestinoNotFound"
 *     }
 * 
 */
router.delete("/:cidade", controller.deleteDestino)

module.exports = router

