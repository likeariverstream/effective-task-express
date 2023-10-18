'use strict'
const { sequelize } = require('./sequelize.js')
const actionModel = require('../models/action-model.js')

const action = sequelize.define('action', actionModel, {})

module.exports = {
  action,
}
