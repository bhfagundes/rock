var express = require('express');
var usuariosRouter = require('./routes/usuariosRoute');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var url='mongodb://localhost:27017/desafioRockBrenner';
var cors = require('cors');
var app = express();
app.use(cors());
var db = mongoose.connection;
db.on('error',console.error);
mongoose.connect(url, {useNewUrlParser: true});
app.use(bodyParser.json());
app.listen(8000, function () {
    console.log('Servidor escutando na porta 5000');
});
app.post('/teste', function(req,res){
    console.log(req.body);
});
app.use('/usuarios',usuariosRouter);