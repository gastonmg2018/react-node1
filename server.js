const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));



const users = [
  {
    "nombre": "Fabian"
  },
  {
    "nombre": "Pedro"
  },
  {
    "nombre": "Maria"
  }
];

app.get('/api/users', (req, res) => {
  res.json({
    users: req.body
  })
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(require("body-parser").urlencoded({ extended: true }));
app.use(require("body-parser").json());
app.post('/test/submit', function(req, res, next) {
  // res.redirect('/test/' + req.body.id)
  // res.render('index', { output: req.body.id });
  setTimeout(function(){res.send(req.body)},1000)
});

app.listen(3000, function () {
  console.log('server on port 3000');
});
