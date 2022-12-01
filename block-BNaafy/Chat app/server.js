const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  // console.log("user connected");
  // socket.on("disconnect", () => {
  //   console.log("user disconnect");
  // });
  socket.on("chat message", (message) => {
    io.emit("chat message", message);
  });
});
server.listen(3000, () => {
  console.log("server listening on port 3k");
});
