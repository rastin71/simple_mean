module.exports = function(app) {

  var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/foo');
  var Memo = require('../models/test');
  var express = require('express');
  var router = express.Router();
	
  router.get('/memos', function(req, res, next) {
    Memo.find({}, function(err, docs) {
      if (err) { res.status(500).json({error: err}); }
      else { res.status(200).send(docs); }
    });
  }); 
}    
