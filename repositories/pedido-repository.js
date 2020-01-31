const Pedido = require('../models/pedido');

const getAll = async () => await Pedido.find();

const remove = async (id) => await Pedido.findOneAndDelete({_id: id});


const addNovoPedido = async (pedidoBody)=>{
    var pedido = new Pedido();
    pedido.cliente = pedidoBody.cliente;
    pedido.produtos = pedidoBody.produtos;
    return await pedido.save();
}

const setPedidoById = async (pedidoBody)=> await Pedido.findOneAndUpdate({_id: pedidoBody._id},{$set:{cliente: pedidoBody.cliente,dataCadastro: pedidoBody.dataCadastro, dataAtualizacao: Date.now(), produtos: pedidoBody.produtos}},{new: true,useFindAndModify: false});



module.exports = {delete : remove,getAll,addNovoPedido,setPedidoById};