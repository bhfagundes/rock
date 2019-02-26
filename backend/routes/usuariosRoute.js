var express = require('express');
var Usuarios = require('.././models/usuariosModel');
var usuariosController = require('../controllers/usuariosController')(Usuarios);
var usuariosRouter = express.Router();
var app = express();

usuariosRouter.route('')
    .get(usuariosController.get)
    .post(usuariosController.add);

usuariosRouter.route('/:id')
    .get(usuariosController.getById)
    .put(usuariosController.update)
    .delete(usuariosController.remove);

module.exports = usuariosRouter;