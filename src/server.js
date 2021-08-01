/* eslint-disable no-console */
import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import socketController from "./socketController";
import events from "./event";
const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(logger("dev"));
app.get("/", (req, res) =>
  res.render("home", { events: JSON.stringify(events) })
);

const handleListening = () =>
  // eslint-disable-next-line no-console
  console.log(`CHECK! Server running : http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

//왜 io를 만들었을까 서버를 만들어서 SocketIO를 전달하기 위해서이다.
//io는 무슨 엯할 을 하는 걸까??
//io가 모든 이벤트를 알아야 하기 때문이다.
const io = socketIO(server);

io.on("connection", socket => socketController(socket));
