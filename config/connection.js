const { connect, connection }= require('mongoose');

connect('mongodb://localhost/aVerySocialAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
