var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var usuariosModel = new Schema({
    nome:String,
    email:String
});
module.exports = mongoose.model("Usuarios", usuariosModel);