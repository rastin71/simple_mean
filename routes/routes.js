module.exports = function(app) {

  var express = require('express');
  var router = express.Router();
  var mongoose = require('mongoose');

  router.get('/memos', function(req, res, next) {
    Memo.find({}, function(err, docs) {
      if (err) { res.status(500).json({error: err}); }
      else { res.status(200).send(docs); }
    });
  }); 
}    