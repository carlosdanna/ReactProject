var path = require('path');
var peopleManager = require('../database/peopleManager');


module.exports = function(app){


app.route('/people')
  .get(function(req,res){
    console.log('it is working');
    peopleManager.getPeople(req,res);
  })
  .post(function(req, res){
    peopleManager.createPeople(req,res);
  });

}
