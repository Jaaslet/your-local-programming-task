var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var app = express();
var db_url = "mongodb://localhost:27017/data";

function get_data(id_start,id_end,callback) {
  MongoClient.connect(db_url, function(err, db) {
    assert.equal(null, err);
    var collection = db.collection('episodes');
    collection.find({})
      .limit(5) //TODO: figure out why this does not work
      .toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
    });
    db.close();
  });
}


app.get('/', function (req, res) {
  var id_start=req.query.id_start;
  var id_end=req.query.id_end;
  get_data(id_start,id_end,function(data){res.send(data);});
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});

