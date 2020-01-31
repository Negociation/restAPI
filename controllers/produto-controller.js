const Produto = require('../models/produto');

const ProdutoRepository = require('../repositories/produto-repository');


exports.produtos_getAll = async (req,res)=>{
      await ProdutoRepository.getAll().then((produtos)=>{
        res.status(200).json(produtos);
      }).catch((err)=>{
        res.send("ERROR: "+ err);
      });
}

exports.produtos_getByDescricao = async (req,res)=>{
    await ProdutoRepository.getByDescricao(req.query.descricao).then((produto)=>{
        res.status(200).json(produto);
    }).catch((err)=>{
        res.status(400).send(err);
    });
 }

 exports.produtos_addNovoProduto= async (req,res)=>{
    if(req.body.descricao == undefined || req.body.descricao == ''){
        res.status(400).json({message: "Descrição Produto é obrigatório"});
    }else{
        await ProdutoRepository.create(req.body).then((productObject)=>{
            res.status(201).json({retorno : productObject});
        }).catch((err)=>{
            res.send("ERROR: "+ err);
        });
    }
}

exports.produto_setProdutoById = async (req,res)=>{
    if(req.body._id == undefined){
        res.status(401).json({message: "Id não foi informado"});
    }else{
        await ProdutoRepository.setProdutoById(req.body).then((productObject)=>{
            res.status(200).json({retorno : productObject});
        }).catch((err)=>{
            res.status(500).send("ERROR: " + err);
        });
    }
}



