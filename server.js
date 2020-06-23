'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const server = express();
// const router = express.Router();

server
  .use(express.static('public'))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

server.post('/shutdown', (req, res) => {
  let shutdown = require('shutdown-computer');
  shutdown.shutDownComputer();
  res.send('oof.');
});
