var express = require('express')

var app = express()   // The code below will display 'Hello World!' to the browser when you go to http://localhost:3000 

app.get('/', function (req, res) {
    res.send('Hello World! This is a CI test.')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

module.exports = app;  