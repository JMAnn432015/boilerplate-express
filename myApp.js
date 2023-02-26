let express = require('express');
let app = express();

// console.log('Hello World'); Task number 1

app.get('/', (req, res) => {
  // res.send('Hello Express'); Task number 2
  const absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath);
});


































 module.exports = app;
