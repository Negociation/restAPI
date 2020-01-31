const Produto = require('../models/produto');

const getAll = async () => await Produto.find();

const remove  = async (id) => await Produto.findOneAndDelete({_id: id});

const getByDescricao = async (descricao)=> await Produto.findOne({'descricao': descricao});

const create = async (productBody)=>{
    let produto = new Produto();
    produto.descricao = productBody.descricao;
    produto.preco = productBody.preco;
    return await produto.save();
}

const setProdutoById = async (productBody)=> await Produto.findOneAndUpdate({_id: productBody._id}, {$set:{_id: productBody._id,descricao: productBody.descricao,dataAtualizacao: Date.now()}},{new: true,useFindAndModify: false});


module.exports = {delete : remove,getAll, getByDescricao,create,setProdutoById}



