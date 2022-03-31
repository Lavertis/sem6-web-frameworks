const express = require('express')
const path = require("path");
const app = express()
const port = 3000


app.get('/strona1', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/strona1.html'))
})
app.get('/strona2', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/strona2.html'))
})
app.get('/strona3', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/strona3.html'))
})
app.get('/strona4', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/strona4.html'))
})
app.get('/strona5', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/strona5.html'))
})

app.listen(port, () => {
    console.log(`Server działa na porcie: ${port}`)
})