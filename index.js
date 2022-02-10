const express = require('express')
const userService = require('./service/user')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  userService.getAll()
  .then((result) => {
    res.json(result)
  })
})

app.listen(port)