var express = require('express');
var jade = require('jade');

var app = express();

app.set('views', './publics/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/publics'));

app.get('/', function(req, res){
  res.render('index', { title: 'Accueil' });
});

app.get('/about', function(req, res){
  res.render('about', { title: 'A propos' });
});

app.listen(3000);
