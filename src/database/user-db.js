'use strict'
const { sequelize } = require('./sequelize.js')
const userModel = require('../models/user-model')

const user = sequelize.define('user', userModel, {})

module.exports = {
  user,
}
