require("dotenv").config();
require('./database');

const express = require('express');
const app = express();

const cors = require('cors')
const {createServer} = require('http');
const server = createServer(app);
const routes = require('./routes');

const bodyParser = require("body-parser");
const { Server } = require("socket.io");

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes)

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});

const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

// Simulação de conexão e envio de dados
io.on('connection', (socket) => {
    socket.on('gauge1', async (data) => {
      let aux = 0;
      setInterval(function(){
        const random = Math.floor(20 + Math.random() * 5);
        if(random != aux){
          socket.emit('gauge_speed1', random); 
        }
    }, 2000);
  });
    socket.on('gauge2', async (data) => {
      let aux = 0;
      setInterval(function(){
        const random = Math.floor(49 + Math.random() * 5);
        if(random != aux){
          socket.emit('gauge_speed2', random); 
        }
        aux = random;
    }, 3000);
  });





});

module.exports = app;