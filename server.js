// dependencies to call
const fs = require('fs');
const path = require('path');
const express = require('express');
let db = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');

// express is liason to frontend and backend
// express app setup
var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public')); // change how we import assets

// view route
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// corresponds with index.js const getNotes
app.get('/api/notes', (req, res) => {
  res.send(db);
});

app.post('/api/notes', (req, res) => {
  req.body.id = uuidv4(); // adding new id property and adding unique id with uuid
  db.push(req.body);
  fs.writeFileSync('./db/db.json', JSON.stringify(db));
  res.send('everything savy') // res inmportant to closing loop /  can be blank
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id
  const filterDb = db.filter(note => {
    return note.id !== id // creating new array where id's don't match
  });
  db = filterDb
  fs.writeFileSync('./db/db.json', JSON.stringify(filterDb));
  res.send('boom')
});



app.listen(PORT, () =>
  console.log(`App server listening on port ${PORT}!`)
);