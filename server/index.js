var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var app = express();

app.get('/', function (req, res) {
  var id_start=req.query.id_start;
  var id_end=req.query.id_end;
  res.send();
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

