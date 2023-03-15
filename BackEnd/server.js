const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/phone', (req, res) => {
    res.status(200).send('Bem vindo à Pagina de Phones')
})

app.listen(port, () => {
    console.log(`Explame app listenin on port  http://localhost:${port}`)
})