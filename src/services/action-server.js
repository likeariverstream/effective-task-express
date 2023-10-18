'use strict'
const express = require('express')
const actionRoutes = require('../routes/action-router')
const { sequelize } = require('../database/sequelize.js')
const { action } = require('../database/action-db.js')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.ACTION_SERVICE_PORT || 3001
const app = express()
app.use(cors())
app.use(express.json())

sequelize
  .authenticate()
  .then(() => {
    action.sync({ force: true }).then(() => {
      console.log(
        'Connection to actions database has been established successfully',
      )
    })
  })
  .catch((error) => console.error('Unable to connect to the database:', error))

app.use('/', actionRoutes)
app.listen(port, () => console.log(`Server is running on port ${port}`))
