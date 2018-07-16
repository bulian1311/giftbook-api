require('dotenv').config();

const CONFIG = {
  app: process.env.APP || 'dev',

  port: process.env.PORT || '4000',

  jwt_secret: process.env.JWT_SECRET || 'jwt_secret',

  mongo_db:
    process.env.MONGO_DB ||
    'mongodb://bulian1311:bulian1311@ds018848.mlab.com:18848/bulian1311'
};

module.exports = CONFIG;
