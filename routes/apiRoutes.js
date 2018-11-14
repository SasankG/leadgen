const db = require("../models");

module.exports = function(app) {

    app.post("/login", function(req,res) {
      var test = db.User.findOne({
        where: {
          username: req.body.username
        }
      })
        .then(function(test) {
          if(test==null){
            res.send({'success': false});
          }
          else if (test['dataValues']['password'] === req.body.password){
            // if successful login send boolean object
        
            res.send(JSON.stringify({
              'success': true,
              'user': req.body.username,
            }))
          } 
          else{
            res.send({'success': false});
          } 
        });
      
    });

    app.post("/signup", function(req, res) {
        db.User.create({
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
        })
          .then(function(dbUser) {
           res.send({
             'success': true, 
             'test': 'testing',
          })
          });
      });

  };
  