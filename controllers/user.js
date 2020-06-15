var models = require('../models');

module.exports = {

  list: function (req, res) {
    models.User.findAll({
      include: [ models.Task ]
    }).then(function(users) {
      res.json(users);
    });
  },

  create : function(req, res){
    models.User.create({
      username: req.body.username
    }).then(function (user) {
      res.json({
        message: 'saved',
        id: user.id
      });
    });
  }

}
