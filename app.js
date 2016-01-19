var express = require('express');
var hello = require("./Controllers/HelloCntrl");
var notes = require("./Controllers/NotesCntrl");
var cors = require('cors');

var port = 8000;

var app = express();

var r = express.Router();

app.use(cors());
app.use('/api', r);

r.route('/hello').
    get(hello.sample);
    
r.route('/notes').
   get(notes.getBasicNotes);


app.listen(port, function () {
    console.log("Gulp is running on port: " + port);
});