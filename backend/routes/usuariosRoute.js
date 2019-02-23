var express = require('express');
var usuariosRouter = express.Router();

var usuariosController = require('../controllers/usuariosController');
usuariosRouter.route('')
    .get(usuariosController.get)
    .post(usuariosController.add);

usuariosRouter.route('/:id')
    .get(usuariosController.getById)

module.exports = usuariosRouter;