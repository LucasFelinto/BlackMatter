const express = require("express")
const path = require("path")

const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)

const World = require("./js/World")
const world = new World("Lucas")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.html")
})

app.get("/ll", (req, res) => {
    res.send(world.nome)
})

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
});

server.listen(8000)