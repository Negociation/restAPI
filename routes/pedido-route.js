const express = require("express");
const router = express.Router();
const PedidoController = require('../controllers/pedido-controller');


router.route("/")
    .post(PedidoController.pedidos_addNovoPedido)
    .put(PedidoController.pedidos_setPedidoById)
    .get(PedidoController.pedidos_getAll);

module.exports = router;
