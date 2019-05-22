//서버.js는 백엔드

import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (rec, res) => res.render("home"));

const handleListening = () =>
  console.log(`v Server running: http://localhost:${PORT}`);

//서버안에 서버집어넣음
const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

let sockets = [];

//서버는 연결되면 connection이라는 이벤트를 전달받음.
//웹콘솔창에 io("/") 라고 입력하면 아래로그뜸.(같은서버면io("/")만입력하면됨)
//connection의 시작점 io는 서버.
io.on("connection", socket => {
  //소켓아이오 아이디확인하는 이벤트.
  // sockets.push(socket.id);
  //연결되면 메시지보내는 이벤트.->index.js
  //emit는 이벤트발생하고 여기에연결된 소켓에 이벤트를 보냄.
  //socket.emit("hello");
  //연결되면 2초후 메시지보내는 이벤트.->index.js
  //setTimeout(() => socket.emit("hello"), 2000);
  //연결되면 방금접속한 클라이언트 제외하고 다른모든 클라에게 2초후 메시지보내는 이벤트.->index.js
  //broadcast는 현재연결된 소켓을 제외한 모든소켓에 이벤트를 보냄.
  //setTimeout(() => socket.broadcast.emit("hello"), 1000);
  socket.on("newMessage", ({ message }) => console.log(message));
});

// //소켓아이오 아이디확인.
// setInterval(() => console.log(sockets), 5000);
