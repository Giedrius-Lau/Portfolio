const express = require('express');
const fs = require('fs');

var app = express();
app.set('view engine', 'pug')

// app.use((req, res, next) => {
//   res.render('maintainance');
// })

app.use(express.static(__dirname + '/public'))


app.use((req,res,next) => {
  var now = new Date().toString();
  var log = (`${now}: ${req.method} ${req.url}`);

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.')
    }
  });

  next();
});

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Page not found'
  });
});


app.listen(3000, () => {
  console.log('Server is up on port 3000')
});