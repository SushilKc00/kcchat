require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 8080;
const Router = require("./routes/routes");
const database = require("./db/database");
const dbUrl = process.env.DB_URL;

app.use(express.static(__dirname + "/public"));
app.use("/api/products", Router);

database(dbUrl);

io.on("connection", (socket) => {
  socket.on("message", (mess) => {
    socket.broadcast.emit("myMessage", mess);
  });
});

http.listen(PORT, () => {
  console.log("Start");
});
