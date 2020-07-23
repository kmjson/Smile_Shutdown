'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const server = express();
// const router = express.Router();

server
  .use(express.static('public'))
  .listen(PORT, () =>
    console.log(`Listening on ${PORT}. http://localhost:3000/`)
  );

server.post('/shutdown', (req, res) => {
  // let shutdown = require('shutdown-computer');
  // shutdown.shutDownComputer();
  const sound = require('sound-play');
  const path = require('path');
  const filePath = path.join(__dirname, 'alarm.mp3');
  sound.play(filePath);
  res.send('oof.');
});
