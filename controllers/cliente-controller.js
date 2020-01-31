const ClienteRepository = require('../repositories/cliente-repository');

exports.clientes_addNovoCliente = async (req,res)=>{


    if(req.body.nome == undefined || req.body.nome == ''){
        res.status(400).json({message: "Nome Cliente é obrigatório"});
    }else{
        await ClienteRepository.create(req.body).then((clienteObject)=>{
            res.status(201).json({retorno : clienteObject});
        }).catch((err)=>{
            res.send("ERROR: "+ err);
        });
    }
}

exports.clientes_setProdutoById = async (req,res)=>{
    if(req.body._id == undefined){
        res.status(401).json({message: "Id não foi informado"});
    }else{
        await ClienteRepository.setClienteById(req.body).then((clienteObject)=>{
            res.status(200).json({retorno : clienteObject});
        }).catch(()=>{
            res.status(500).send("ERROR: " + err);
        });    
    }
}

exports.clientes_getAll = async (req,res)=>{
    await ClienteRepository.getAll().then((clientesObjectList)=>{
        res.status(200).json(clientesObjectList);
    }).catch(()=>{
        res.status(404).send("ERROR: "+ err);
    })
}

exports.clientes_getByName = (req,res)=>{
    if(req.query.nome == undefined){
        res.status(500).send("Informe um Nome para a Busca");
    }else{
        ClienteRepository.getByNome(req.query.nome).then((clienteObject)=>{
            res.status(200).send(clienteObject);
        }).catch((err)=>{
            res.status(500).send(err);
        })
    }
}