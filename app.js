const express = require('express')
const app = express()

//req=requerimiennto: Es un objeto con data
//res=repspuesta: Es un objeto con data y metodos

app.get('/', (req, res) => {
  res.send()
})

app.get('/toyota', (req, res) => {
  res.send(carro)
})

app.get('/honda', (req, res) => {
  res.send(moto)
})

app.get('/oxford', (req, res) => {
  res.send(bicicleta)
})

app.listen(5000, () => {
  console.log('Servidor funcionando en puerto 5000')
})
