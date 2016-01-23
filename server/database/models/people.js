var mongoose = require('mongoose');

var mongoSchema = mongoose.Schema;

var peopleSchema = new mongoSchema({
  '_id'         : mongoSchema.ObjectId,
  'Firstname'   : String,
  'Lastname'    : String,
  'Email'       : String,
  'Description' : String,
  'Active'      : Boolean
});

var People = mongoose.model('People', peopleSchema);

module.exports = People;
