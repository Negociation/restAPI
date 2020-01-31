const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    cliente:{
        type: Schema.Types.ObjectId,
        ref: 'clientes',
        required: [true, 'Cliente ?']
    },
    dataCadastro:{
        type: Date,
        default: Date.now
    },
    dataAtualizacao:{
        type: Date,
    },
    produtos:[{}]
});

const Pedido = mongoose.model('pedido',pedidoSchema);
module.exports = Pedido;

