const express = require('express')
const userService = require('./service/user')
const app = express()
const port = 3000

//Definir la ubicación de las vistas de la aplicación.
app.set('views', `${__dirname}/views`)

//Definir el motor de vistas de express.
app.set('view engine', 'pug')

//Definir la ruta para los archivos estaticos.
app.use(express.static(`${__dirname}/../public`));

//API GET ('/')
app.get('/', (req, res) => {
  userService.getAll()
  .then((result) => {
    res.status(200)
    //el resultado de la consulta es puesta
    //en la variable users
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