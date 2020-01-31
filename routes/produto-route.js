const express = require("express");
const router = express.Router();
const ProdutoController = require('../controllers/produto-controller');

//Rota GET (getAll)
router.get("/getAll", ProdutoController.produtos_getAll);

//Rota GET (getByDescricao)
router.get("/getByDescricao",ProdutoController.produtos_getByDescricao);

// Rota POST
router.route("/").post(ProdutoController.produtos_addNovoProduto).put(ProdutoController.produto_setProdutoById);

module.exports = router;
