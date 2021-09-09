// dependencies to call
const fs = require('fs');
const express = require('express')

// express app setup
var app = express();
var PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app