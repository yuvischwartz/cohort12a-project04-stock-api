// This file deals with connecting to the database
const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('mysql://root:Rootmysql123@localhost/cohort12a-stock-api', {logging: false});
module.exports = {sequelize};