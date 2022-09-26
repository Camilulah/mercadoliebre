const { dir } = require('console');
const express = require('express');
const { dirname } = require('path');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );


app.get('/home', function (req, res){
    res.sendFile((__dirname + '/views/home.html'));
})

app.get('/register', function (req, res){
    res.sendFile((__dirname + '/views/register.html'));
})

app.get('/login', function (req, res){
    res.sendFile((__dirname + '/views/login.html'));
})

app.listen(process.env.PORT || 3000, function() {
    console.log("Servidor corriendo, marvel mejor que dc");
})