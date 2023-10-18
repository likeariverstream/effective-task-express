'use strict'
const express = require('express')
const userRoutes = require('../routes/user-router.js')
const { sequelize } = require('../database/sequelize.js')
const { user } = require('../database/user-db.js')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.USER_SERVICE_PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())

sequelize
  .authenticate()
  .then(() => {
    user.sync({ force: true }).then(() => {
      console.log(
        'Connection to user database has been established successfully.',
      )
    })
  })
  .catch((error) => console.error('Unable to connect to the database:', error))

app.use('/', userRoutes)
app.listen(port, () => console.log(`Server is running on port ${port}`))
