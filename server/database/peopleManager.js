var mongoose = require('mongoose');
var People = require('./models/people');

var peopleManager = {};

peopleManager.getPeople = function(req,res){
  People.find({}, function(err,data){
    if(err){
      var response = {'error': true, 'message': 'Data could not be retrieved'};
      res.json(reponse);
    }else{
      res.json(data);
    }
  });
}

peopleManager.createPeople = function(req,res){
  var db = new People();
  db._id = mongoose.Types.ObjectId();
  db.Firstname = req.body.Firstname;
  db.Lastname = req.body.Lastname;
  db.Email = req.body.Email;
  db.Description = req.body.Description;
  db.Active = req.body.Active;
  console.log(req.body);

  db.save(function(err){
    if(err){
      var response = {'error': true, 'message': 'Data could not be saved'};
    }else {
      var response = {'error': false, 'message': 'Data saved'};
    }
    res.send(response);
  });
}

module.exports = peopleManager;
