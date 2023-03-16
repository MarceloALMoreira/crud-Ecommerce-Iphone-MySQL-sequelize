const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port =  3000

app.get('/', (req, res) => {
    res.status(200).send({ message: 'Bem vindo' })
})
app.get('/teste', (req, res) => {
    res.status(200).send({ message: 'Bem vindo à sua rota: teste' })
})

app.listen(port, () =>  console.log(`Servidor no http://localhost:${port}`))


module.exports = app