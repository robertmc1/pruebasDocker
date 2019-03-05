const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb:27017/demiumRealUnicorn', { useNewUrlParser: true });

module.exports = mongoose;