var Character = require('../model/character')

exports.create = function(name, portrait, bio, parents, siblings, closeFriends,
    children, marriage, lovers, liege, kingdom, callback) {
  var character = new Character({
    'name' : name,
    'portrait' : portrait,
    'bio' : bio,
    'parents' : parents,
    'siblings' : siblings,
    'closeFriends' : closeFriends,
    'children' : children,
    'marriage' : marriage,
    'lovers' : lovers,
    'liege' : liege,
    'kingdom' : kingdom
  });
  character.save(function(err, character) {
    if (err)
      throw err;
    callback(character);
  });
};

exports.list = function(callback) {
  Character.find({}, {
    _id : 1,
    name : 1
  }, function(err, characters) {
    if (err)
      throw err;
    callback(characters);
  });
};

exports.findById = function(_id, callback) {
  Character.findById(_id, function(err, character) {
    if (err)
      throw err;
    callback(character);
  });
}
