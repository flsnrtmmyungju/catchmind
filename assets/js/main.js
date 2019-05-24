//index.js는클라이언트

import { handleMessageNotif } from "./chat";
const socket = io("/");

//서버에서 hello라고오면 콘솔에 찍음.
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
  socket.emit("newMessage", { message });
  console.log(`you: ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}

socket.on("messageNotif", handleMessageNotif);
