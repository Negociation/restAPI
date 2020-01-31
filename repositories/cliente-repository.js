const Cliente = require('../models/cliente');

const getAll = async () => await Cliente.find();

const remove  = async (id) => await Cliente.findOneAndDelete({_id: id});

const getByNome = async (nome)=> await Cliente.findOne({'nome': nome});

const create = async (clienteBody)=>{
    let cliente = new Cliente();
    cliente.nome = clienteBody.nome;
    cliente.dataNascimento = clienteBody.dataNascimento;
    return await  cliente.save();
}

const setClienteById = async (clienteBody) => await Cliente.findOneAndUpdate({_id: clienteBody._id}, {$set:{nome: clienteBody.nome,dataNascimento: clienteBody.dataNascimento, dataAtualizacao: Date.now()}},{new: true,useFindAndModify: false});

module.exports = {delete : remove,getAll,getByNome,create,setClienteById};