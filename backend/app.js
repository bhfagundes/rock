var express = require('express');
var usuariosRouter = require('./routes/usuariosRoute');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());
var DATABASE_URL = process.env.DATABASE_URL || 'http://localhost';
mongoose.connect(`mongodb://${DATABASE_URL}/posts`, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', function (error) {
// If first connect fails because server-database isn't up yet, try again.
// This is only needed for first connect, not for runtime reconnects.
// See: https://github.com/Automattic/mongoose/issues/5169
  if (error.message && error.message.match(/failed to connect to server .* on first connect/)) {
    setTimeout(function () {
    mongoose.connect(`mongodb://${DATABASE_URL}/posts`, { useNewUrlParser: true }).catch(() => {
        // empty catch avoids unhandled rejections
    });
    }, 20 * 1000);
} else {
    // Some other error occurred.  Log it.
    console.error(new Date(), String(error));
}
});

db.once("open", function(callback){
console.log("Connection Succeeded");
});
var db = mongoose.connection;
app.use(bodyParser.json());
app.listen(process.env.PORT || 8081);
app.post('/teste', function(req,res){
    console.log(req.body);
});
app.use('/usuarios',usuariosRouter);