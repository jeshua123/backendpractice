let nombres = [
  {
    id: 1,
    name: 'eliud'
  },
  {
    id: 2,
    name: 'luis'
  }
]

const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
  const foo = 'hola'

  res.send(foo)
})

app.post('/add-name', (req, res) => {
  const resp = req.body
  const newdata = [...nombres, resp]

  res.send(newdata)
})

app.put('/edite-name/:id', (req, res) => {
  const resp = req.body
  const id = req.params.id

  const newdata = nombres.map((iter) => iter.id === +id ? { ...iter, name: resp.name } : iter)
  res.send(newdata)
})

app.delete('/delete-name/:id', (req, res) => {
  const id = req.params.id
  const deletedData = nombres.filter((iter) => iter.id !== +id)

  res.send(deletedData)
})

app.listen(5000, () => {
  console.log('Servidor funcionando en puerto 5000')
})

//Express.js
//Nodemon
//Cors
