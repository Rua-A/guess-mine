// eslint-disable-next-line prettier/prettier
const socket = io("/");
socket.on("hello", () => console.log("Somebody Say Hello~!"));
