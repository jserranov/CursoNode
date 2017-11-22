var express = require('express');
var app = express();
var server = require ('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hola-mundo', function(req, res){
    res.status(200).send('Hola mundo desde ruta');
});

//se crea un array de mensajes
var messages = [{
  id: 1,
  text: 'Bienvenido al chat privado',
  nickname: 'Bot - Juanweb.es'
}]
io.on('connection', function(socket){
  console.log("El nodo con ip: "+ socket.handshake.address+ " se ha conectado...");
//Se emite el mensaje
  socket.emit('messages', messages);
//se recogen los mensajes
  socket.on('add-message', function(data){
    messages.push(data);
    socket.emit('messages', messages);
  });


});

server.listen(6677, function(){
  console.log('Servidor esta funcionando en http://localhost:6677');
});
