var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/foo');

var Memo = require('../models/test');

router.route('/memos')

  .get(function(req, res) {
    Memo.find({}, function(err, docs) {
      if (err) {
        res.status(500).send(err);
      } else {
       res.status(200).send(docs);
      }
    });
  })

  .post(function(req, res) {
    var m = new Memo(req.body);
    m.save(function(err) {
      if (err) {return res.status(500).json({'error': err})}
      res.end('{"success" : "Save Successfully", "status" : 200}');
    });
  });

module.exports = router;
