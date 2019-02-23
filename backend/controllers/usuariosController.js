var Usuarios = require('../models/usuariosModel');
var get = function(req,res){
    Usuarios.find(function(err, usuarios){
        if(err)
        {
            res.status(500);
            res.send("Erro interno no servidos");
        }
        else
        {
            res.status(200);
            res.send(usuarios);
        }
    });
};
var getById = function(req,res){
    Usuarios.findById(req.params.id, function(err, usuario){
        if(err)
        {
            res.status(404);
            res.send("Usuário não encontrado");
        }
        else
        {
            res.status(200);
            res.send(usuario);
        }
    })
};
var add  = function(req, res)
{
    var usuario = new Usuarios(req.body);
    usuario.save(function(err){
        if(err){
            res.status(500);
            res.send('Erro : falha ao incluir produto...');
        }
        else
        {
            res.status(201);
            res.send(usuario);
        }
    })
};
module.exports = {
    add: add,
    get: get,
    getById: getById
}