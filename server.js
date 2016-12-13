var express = require('express');
var app = express();
var mongodb = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var ObjectID = mongodb.ObjectID;
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(bodyParser.json());
app.use(express.static('client/build'));


app.get('/test1', function(req,res){
    // Connection URL
    var url = 'mongodb://localhost:27017/test1';
    MongoClient.connect(url, function(err, db) {
      var collection = db.collection('test1');
      collection.find({}).toArray(function(err, docs) {
        res.json(docs)
        db.close();
      });
    });
  })

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
