// initialise modules
var express = require('express')
var app = express()

// specify express folder
app.use(express.static(__dirname + '/public'))

// Action
app.get('/', function(req, res){
  res.redirect('/index.html')
})

app.get('/Browse', function(req, res){
  res.redirect('/Browse.html')
})

app.get('/Library', function(req, res){
  res.redirect('/Library.html')
})

app.get('/History', function(req, res){
  res.redirect('/History.html')
})

app.get('/test', function(req, res){
  res.redirect('/test.html')
})

// Use the node_modules
// Vue
app.use('/vue', express.static(__dirname + '/node_modules/vue/dist/vue.js'));
// Bootswatch
app.use('/theme', express.static(__dirname + '/node_modules/bootswatch/paper/bootstrap.min.css'));

// specify listening port
app.listen(3000, function () {
  console.log('App lisening on port 3000!')
})
