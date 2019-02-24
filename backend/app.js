var express = require('express');
var usuariosRouter = require('./routes/usuariosRoute');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var url='mongodb://localhost:27017/desafioRockBrenner';
var db = mongoose.connection;
db.on('error',console.error);
mongoose.connect(url, {useNewUrlParser: true});
var app = express();
app.use(bodyParser.json());
app.listen(8000, function () {
    console.log('Servidor escutando na porta 5000');
});
app.use('/usuarios',usuariosRouter);