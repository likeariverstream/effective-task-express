'use strict'
const express = require('express')
const {
  createUserAction,
  getUserActions,
} = require('../controllers/action-controller.js')

const router = express.Router()

router.post('/action', createUserAction)
router.get('/actions', getUserActions)

module.exports = router
