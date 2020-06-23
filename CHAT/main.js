
var messages = document.getElementById('messages');
var sendButton = document.gerElementById('send-btn');

// По нажатию на кнопку отправить -отправить на сервер Nick:Message и сделать шаг 1.
sendButton.addEvelentListener('click', sendUserMessage);

getMessagesFromServer();

//Шаг 1.
// Получить сообщения с сервера
async function getMessagesFromServer(){
  // Получаем ассинхронный ответ
  var reponse= await fetch('https://fchatiavi.herokuapp.com/get/arick/?offset=0&limit=1000000');
  // Декорируем его из строки в объекты javascript
  respone = await response.json();

  var allMessagesHTML ='';
  for (var i = 0; i < respone.length; i++) {
    var messageData = response[i];
// Создать верстку меседжа
var message = '
<div class="message">
<div class="message-nickname"> ${messageData.Name} </div>
<div class="message-text"> ${messageData.Message} </div>
</div>
'
allMessagesHTML = allMessagesHTML + message;
}
// Добавить в messages-wrapper письма.
messages.innerHTML = allMessagesHTML;
}

async function sendUserMessage();
// Получить что написал пользователь в поле Nickname
var userNickname = document.getElementById('nickname-input').value;
//Получить что написал пользователь в поле Message
var sendUserMessage = document.getElementById('message-input').value;

if(userNickname.length === 0){
  alert("Ты должен ввести имя!");
  return;
  }

if(userMessage.length === 0){
  alert("Ты должен ввести сообщение!");
  return;
  }

await fetch('https://fchatiavi.herokuapp.com/send/arick/', {
  method: 'POST'
  body: JSON.stringify({
    Name: userNickname,
    Message: userMessage
  })
});

getMessagesFromServer();
}
