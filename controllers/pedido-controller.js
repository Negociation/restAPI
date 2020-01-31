const PedidoRepository = require('../repositories/pedido-repository');

exports.pedidos_addNovoPedido= (req,res)=>{
    if(req.body.cliente == undefined){
        res.status(401).json({message: "Cliente é obrigatório"});
    }else{
        PedidoRepository.addNovoPedido(req.body).then((pedidoObject)=>{
            res.status(201).json({retorno : pedidoObject});
        }).catch((err)=>{
            res.status(401).send("ERROR: "+ err);
        });
    }
}

exports.pedidos_getAll = async (req,res)=>{
    PedidoRepository.getAll().then((pedidoObjectList)=>{
        res.status(200).json({message: "Sucesso", "lista": pedidoObjectList});
    }).catch((err)=>{
        res.status(500).send("ERROR: "+ err);
    });
}

exports.pedidos_setPedidoById = (req,res)=>{
    PedidoRepository.setPedidoById(req.body).then((pedidoObject)=>{
        res.status(200).json({retorno : pedidoObject});
    }).catch((err)=>{
        res.status(500).send("ERROR: "+ err);
    })
}