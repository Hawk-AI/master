'use strict';

const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("PRIMERA PRUEBA, HOLA EDMUNDO.2")
});

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
