const Sequelize = require('sequelize')

const sequelize = new Sequelize('battlehost', process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    dialect: 'postgres',
  })

const models = {
  User: sequelize.import('./userModel'),
};


module.exports = models
module.exports =  sequelize 