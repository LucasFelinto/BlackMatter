const express = require("express")
const path = require("path")

const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.html")
})


io.on('connection', function (socket) {
    socket.emit('news', { id: socket.id });
    socket.on('my other event', function (data) {
      console.log(data);
    });
});

server.listen(8000)