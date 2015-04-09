var api = require('./components/api');

module.exports = function (app) {

  app.get('/', api.index);
  app.get('/list', api.list);
  app.get('/character/:id', api.findById);
  app.post('/character/create', api.create);

};
