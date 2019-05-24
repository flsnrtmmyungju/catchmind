//서버.js는 백엔드

import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./events";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () =>
  console.log(`✅ Server running: http://localhost:${PORT}`);

//서버안에 서버집어넣음
const server = app.listen(PORT, handleListening);

const io = socketIO.listen(server);

//서버는 연결되면 connection이라는 이벤트를 전달받음.
//웹콘솔창에 io("/") 라고 입력하면 아래로그뜸.(같은서버면io("/")만입력하면됨)
//connection의 시작점 io는 서버.
io.on("connection", socket => socketController(socket, io));
