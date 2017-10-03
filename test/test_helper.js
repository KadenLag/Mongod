const mongoose = require('mongoose');

mongoose.connect('mongodb://Nick:Hinata2324#@mongod-shard-00-00-2nzr8.mongodb.net:27017,mongod-shard-00-01-2nzr8.mongodb.net:27017,mongod-shard-00-02-2nzr8.mongodb.net:27017/test?ssl=true&replicaSet=Mongod-shard-0&authSource=admin', { useMongoClient: true });
mongoose.connection
  .once('open', () => console.log('Connection Established'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });
