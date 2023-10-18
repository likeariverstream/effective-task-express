'use strict'
const { action } = require('../database/action-db.js')

const createUserAction = async (req, res) => {
  try {
    const { userId, actionType } = req.body
    const userAction = await action.create({ userId, actionType })
    return res.json(userAction)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

const getUserActions = async (req, res) => {
  try {
    const { user, page = 1, limit = 10 } = req.query
    const offset = (page - 1) * limit
    const userActions = await action.findAndCountAll({
      where: { userId: user },
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    })
    return res.json(userActions)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}

module.exports = {
  createUserAction,
  getUserActions,
}
