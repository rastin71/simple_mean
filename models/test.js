var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TestSchema = new Schema({
  created: { type: Date, default: Date.now },
  content: { type: String },
  state: { type: Boolean }
});

module.exports = mongoose.model('Memo', TestSchema);
