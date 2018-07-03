const pgp = require('pg-promise')();

const config = {
  host: 'localhost',
  port: 5432,
  database: 'career_projects_tracker',
  user: 'postgres',
  password: 'postgres',
};

module.exports = pgp(config);
