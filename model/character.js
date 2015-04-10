var mongoose = require('mongoose');

var Character = mongoose.model('Character', {
  name: String,
  portrait: String,
  bio: String,
  parents: [String],
  siblings: [String],
  closeFriends: [String],
  children: [String],
  marriage: [String],
  lovers:  [String],
  liege: [String],
  kingdom: [String],
});

module.exports = Character;
