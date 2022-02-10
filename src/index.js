const express = require('express')
const userService = require('./service/user')
const app = express()
const port = 3000

app.set('views', `${__dirname}/views`)
app.set('view engine', 'pug')

app.use(express.static(`${__dirname}/../public`));

app.get('/', (req, res) => {
  userService.getAll()
  .then((result) => {
    res.status(200)
    .render('index.pug', {
      users: result
    })
  })
  .catch((err) => {
    console.log(err)
    res.status(500)
      .render('error.pug', {
        errorNumber: 500
      })
  })
})

app.listen(port)