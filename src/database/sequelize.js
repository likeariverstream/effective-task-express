'use strict'
const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()
const database = process.env.DATABASE
const username = process.env.USER_NAME
const password = process.env.PASSWORD
const host = process.env.DATABASE_HOST
const dialect = process.env.DATABASE_DIALECT

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
})

module.exports = {
  sequelize,
}
