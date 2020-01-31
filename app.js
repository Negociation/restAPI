//Declarações de Inicialização
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;
const db = require('./config/db').database;
const clienteRoute = require('./routes/cliente-route');
const pedidoRoute = require('./routes/pedido-route');
const produtoRoute = require('./routes/produto-route');



//Inicialização de Utilização
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))



//Uso das rotas
app.use("/clientes",clienteRoute);
app.use("/pedidos",pedidoRoute);
app.use("/produtos",produtoRoute);

//const router = express.Router();
/*
router.get('/', (req,res)=>{
    //res.send("<title> Ola </title><h5>Ola Mundo</h5>")
    res.json({message: "Ola Mundo"})
});

app.use('/api', router);
*/

//Conexão com Banco de Dados
mongoose.connect(db, {useNewUrlParser: true,useUnifiedTopology: true} ).then(
    ()=>{
        console.log("Conexão com Banco de Dados executada com sucesso"); 
    }
).catch(
    (err)=>{
        console.log('Não foi possivel conectar', err);
    }
);



module.exports = app.listen(port, ()=>{ console.log("Server Started on Port", port); });

