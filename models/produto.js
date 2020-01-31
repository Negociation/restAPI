const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema({
    descricao:{
        type: String,
        required: [true, 'Descrição ?']
    },
    preco:{
        type: Number,
        required: [true, 'Preço ?']
    },
    dataCadastro:{
        type: Date,
        default: Date.now
    },
    dataAtualizacao:{
        type: Date,
    }
});

const Produto = mongoose.model('produto',produtoSchema)

module.exports = Produto;