var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
  created: { type: Date, default: Date.now },
  content: { type: String }
});

mongoose.model('Memo', TestSchema);
