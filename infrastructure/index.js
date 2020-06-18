'use strict';

const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send("LO QUE QUERRAS.")
});

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
