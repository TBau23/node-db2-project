const knex = require('knex');
const knexFile = require('../knexfile.js');

// dynamic environment reading -> process.env.NODE_ENV will read as 
// production if deployed to heroku
const environment = process.env.NODE_ENV || 'development';

const config = knexFile[environment];

module.exports = knex(config);
