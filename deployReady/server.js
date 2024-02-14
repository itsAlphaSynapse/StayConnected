const express = require("express");
const http = require('http')
const socketIO = require('socket.io')
const mongoose = require('mongoose')
require("dotenv/config")
const socketController = require("./sockets/socket.js")
const { changeConnectionWithDB } = require("./middleware/checkDBConnection.js");
const path = require("path");




const app = express();
// making http and web socket server
const httpServer = http.createServer(app);
const io = socketIO(httpServer);


app.use(express.json())
app.use(require('cookie-parser')())

// using routes
app.use(require("./routes/userRoutes.js"))
app.use(require("./routes/postRoutes.js"))
app.use(require("./routes/commentsRoutes.js"))
app.use(require("./routes/chatRoutes.js"))

// using socket controller
socketController(io);

// connecting mongoDB
const DB = process.env.DB_CONNECTING_STRING || "mongodb://local"
mongoose.connect(DB)
    .then(() => changeConnectionWithDB(true))
    .catch((err) => {
        console.log(err)
        changeConnectionWithDB(false)
    })


app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
