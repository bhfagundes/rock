var express = require('express');
var mongoose = require('mongoose');
var usuariosRouter = require('./routes/usuariosRoute');
var app = express();
var router = express.Router();
var url='mongodb://localhost:27017/desafioRockBrenner';
var db = mongoose.connection;
db.on('error',console.error);
db.once('open',function(){
    console.log('Conectado com sucesso ao banco de dados MongoDB')
});
mongoose.connect(url, {useNewUrlParser: true});
app.listen(5000,function(){
    console.log('Servidor executando');
})



app.use('/usuarios',usuariosRouter);