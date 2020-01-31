const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({
    nome:{
        type: String,
        required: [true, 'Nome ?']
    },
    dataNascimento:{
        type: String,   
        required: [true, 'Data Nascimento ?']
    },
    dataCadastro:{
        type: Date,
        default: Date.now
    },
    dataAtualizacao:{
        type: Date,
    }



});

const Cliente = mongoose.model('cliente',clienteSchema)

module.exports = Cliente;