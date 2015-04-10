var characterDAO = require('../../DAO/characterDAO');

exports.index = function(req, res) {
  var desc = {
    version : '0.0.1',
    description : 'Api for using in practices during databootcamp',
    functions : [
        {
          url : '/list',
          params : [],
          type : 'GET',
          description : 'Returns a list with name and id for each charater',
          format : 'json'
        },
        {
          url : '/character/:id',
          params : [],
          type : 'GET',
          description : 'Returns the info of single character',
          format : 'json'
        },
        {
          url : '/character/create',
          params : [ {
            type : 'body',
            values : "name: String, portrait: String, bio: String, parents: [String], siblings: [String], closeFriends: [String], children: [String], marriage: [String], lovers:  [String],liege: [String]"
          } ],
          type : 'POST',
          description : 'Creates new character',
          format : 'json'
        } ]
  };
  res.send(desc);
};

exports.list = function(req, res) {
  characterDAO.list(function(characters) {
    res.send(characters);
  });
};

exports.findById = function(req, res) {
  var _id = req.param('id');
  characterDAO.findById(_id, function(character) {
    res.send(character);
  });
};

exports.create = function(req, res) {
  var name = req.body.name;
  var portrait = req.body.portrait;
  var bio = req.body.bio;
  var parents = req.body.parents;
  var siblings = req.body.siblings;
  var closeFriends = req.body.closeFriends;
  var children = req.body.children;
  var marriage = req.body.marriage;
  var lovers = req.body.lovers;
  var liege = req.body.liege;
  var kingdom = req.body.kingdom;

  characterDAO.create(name, portrait, bio, parents, siblings, closeFriends,
      children, marriage, lovers, liege, kingdom, function(character) {
        res.send(character);
      });
};
