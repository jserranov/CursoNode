
//se especifica la URL del socket
var socket=io.connect('http://192.168.28.5:6677', {'forceNew':true});
//se resibe el mensaje para el cliente
socket.on('messages', function(data){
console.log(data);
render(data);

});

function render(data){
//recorre la informacion que hay en el arreglo data
  var html = data.map(function(message , index){
    return (`
        <div class= "message">
        <strong>${message.nickname}</strong> dice:
        <p>${message.text}</p>
        </div>
      `);
    }).join('');
  var div_msgs = document.getElementById('messages').innerHTML = html;
  div_msgs.scrollTop =
}
function addMessage(e){
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value

    };
  document.getElementById('nickname').style.display = 'none';
  socket.emit('add-message', message);

  return false;
}
