(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQSxNQUMvQkMsT0FEK0IsR0FDVEQsSUFEUyxDQUMvQkMsT0FEK0I7QUFBQSxNQUN0QkMsUUFEc0IsR0FDVEYsSUFEUyxDQUN0QkUsUUFEc0I7QUFFdkNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGVBQTRCRCxPQUE1QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VOb3RpZihkYXRhKSB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfTogJHttZXNzYWdlfWApO1xufVxuIl19
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

//index.js는클라이언트
var socket = io("/"); //서버에서 hello라고오면 콘솔에 찍음.
//socket.on("hello", () => console.log("someboy join"));

/*챗순서
서버에서 커넥션이벤트이일어남*
다른소켓에게 이소켓이연결됐다고 알려줌(브로드케스트)
똑같은유저가 접속하면 다른이벤트 나접속했다.
클라이언트가 이벤트 발생시키면 서버가 이벤트를들어서 모두에게 브로드케스트함
모두 뉴메세지라는 이벤트를 듣고있어야함.
이렇게 채팅가능.
*/

function sendMessage(message) {
  //message:message 키와벨류값이같으면 그냥 message 라고써도댐
  socket.emit("newMessage", {
    message: message
  });
  console.log("you: ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMjJlMTE1NjMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFGQTtBQUdBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakIsQyxDQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7OztBQVNBLFNBQVNDLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThCO0FBQzVCO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLFlBQVosRUFBMEI7QUFBRUQsSUFBQUEsT0FBTyxFQUFQQTtBQUFGLEdBQTFCO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBb0JILE9BQXBCO0FBQ0Q7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDN0JSLEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBRUksSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTNCO0FBQ0Q7O0FBRURSLE1BQU0sQ0FBQ1MsRUFBUCxDQUFVLGNBQVYsRUFBMEJDLHdCQUExQiIsInNvdXJjZXNDb250ZW50IjpbIi8vaW5kZXguanPripTtgbTrnbzsnbTslrjtirhcblxuaW1wb3J0IHsgaGFuZGxlTWVzc2FnZU5vdGlmIH0gZnJvbSBcIi4vY2hhdFwiO1xuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuXG4vL+yEnOuyhOyXkOyEnCBoZWxsb+udvOqzoOyYpOuptCDsvZjshpTsl5Ag7LCN7J2MLlxuLy9zb2NrZXQub24oXCJoZWxsb1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcInNvbWVib3kgam9pblwiKSk7XG5cbi8q7LGX7Iic7IScXG7shJzrsoTsl5DshJwg7Luk64Sl7IWY7J2067Kk7Yq47J207J287Ja064KoKlxu64uk66W47IaM7LyT7JeQ6rKMIOydtOyGjOy8k+ydtOyXsOqysOuQkOuLpOqzoCDslYzroKTspIwo67iM66Gc65Oc7LyA7Iqk7Yq4KVxu65iR6rCZ7J2A7Jyg7KCA6rCAIOygkeyGje2VmOuptCDri6TrpbjsnbTrsqTtirgg64KY7KCR7IaN7ZaI64ukLlxu7YG065287J207Ja47Yq46rCAIOydtOuypO2KuCDrsJzsg53si5ztgqTrqbQg7ISc67KE6rCAIOydtOuypO2KuOulvOuTpOyWtOyEnCDrqqjrkZDsl5Dqsowg67iM66Gc65Oc7LyA7Iqk7Yq47ZWoXG7rqqjrkZAg64m066mU7IS47KeA652864qUIOydtOuypO2KuOulvCDrk6Pqs6DsnojslrTslbztlaguXG7snbTroIfqsowg7LGE7YyF6rCA64qlLlxuKi9cblxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuICAvL21lc3NhZ2U6bWVzc2FnZSDtgqTsmYDrsqjrpZjqsJLsnbTqsJnsnLzrqbQg6re464OlIG1lc3NhZ2Ug65286rOg7I2o64+E64yQXG4gIHNvY2tldC5lbWl0KFwibmV3TWVzc2FnZVwiLCB7IG1lc3NhZ2UgfSk7XG4gIGNvbnNvbGUubG9nKGB5b3U6ICR7bWVzc2FnZX1gKTtcbn1cblxuZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpIHtcbiAgc29ja2V0LmVtaXQoXCJzZXROaWNrbmFtZVwiLCB7IG5pY2tuYW1lIH0pO1xufVxuXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aWZcIiwgaGFuZGxlTWVzc2FnZU5vdGlmKTtcbiJdfQ==
},{"./chat":1}]},{},[2])