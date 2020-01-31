const express = require("express");
const router = express.Router();
const ClienteController = require('../controllers/cliente-controller');

//Rota / (POST & PUT)
router.route("/").post(ClienteController.clientes_addNovoCliente).put(ClienteController.clientes_setProdutoById);

// Rota getAll
router.get("/getAll",ClienteController.clientes_getAll);

// Rota getByName
router.get("/getByName",ClienteController.clientes_getByName);

module.exports = router;
