'use strict'
const express = require('express')
const {
  createUser,
  updateUser,
  getUsers,
} = require('../controllers/user-controller')

const router = express.Router()

router.get('/users', getUsers)
router.post('/user', createUser)
router.patch('/user/:id', updateUser)
module.exports = router
