'use strict'
const { user } = require('../database/user-db.js')
const { sendAction } = require('../requests/send-action.js')
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body
    const existUser = await user.findOne({ where: { email } })

    if (existUser) {
      return res.status(409).json({ message: 'User already exists' })
    }

    const newUser = await user.create({ name, email })
    await sendAction({ userId: newUser.id, actionType: 'create' })
    return res.send({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    })
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ message: 'Internal server error', error: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const { name, email } = req.body

    const [updatedCount] = await user.update({ name, email }, { where: { id } })

    if (updatedCount > 0) {
      const updatedUser = await user.findOne({ where: { id } })
      await sendAction({ userId: updatedUser.id, actionType: 'update' })
      return res.status(200).json({
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
      })
    } else {
      return res.status(404).json({ message: 'User not found' })
    }
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ message: 'Internal server error', error: error.message })
  }
}

const getUsers = async (req, res) => {
  try {
    const users = await user.findAll()
    return res.json(users)
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ message: 'Internal server error', error: error.message })
  }
}
module.exports = {
  createUser,
  updateUser,
  getUsers,
}
