//var Usuarios = require('../models/usuariosModel');
var usuariosController = function (Usuarios){
    var get = function (req, res) {
        Usuarios.find(function (err, usuarios) {

            if (err) {
                res.status(500);
                res.send("Erro interno do servidor");
            }
            else {
                res.status(200);
                res.send(usuarios);
            }
        });
    };
    var add  = function(req, res)
    {
        var usuario = new Usuarios(req.body);
        usuario.save(function(err){
            if(err){
                res.status(500);
                res.send('Erro : falha ao incluir usuário...');
            }
            else
            {
                res.status(201);
                res.send(usuario);
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
    var update = function(req, res)
    {
        Usuarios.findById(req.params.id, function (err, usuario){
            if(err)
            {
                res.status(404);
                res.send("Usuário não encontrado");
            }
            else
            {
                usuario.nome = req.body.nome;
                usuario.email = req.body.email;
                usuario.save(function (err){
                    if(!err)
                    {
                        res.status(200);
                        res.send(usuario);
                    }
                    else
                    {
                        res.status(500);
                        res.send('Falha ao atualizar o usuário');
                    }
                });
            }
        });
    };
    var remove = function(req, res){
        Usuarios.findById(req.params.id, function (err, usuario){
            usuario.remove(function (err){
                if(!err)
                {
                    res.status(204);
                    res.send('Usuário removido');
                }
            });
        });
    };
    return {
        add: add,
        get: get,
        getById: getById,
        update:update,
        remove: remove
    };
};
module.exports = usuariosController;