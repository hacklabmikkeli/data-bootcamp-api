var config = {
  'host': '192.168.11.30',
  'table': 'bootcamp'
};

exports.getConnectUrl = function () {
  return 'mongodb://' + config.host + '/' + config.table;
};