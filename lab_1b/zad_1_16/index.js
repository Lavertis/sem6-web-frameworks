const express = require('express')
const path = require("path");
const app = express()
const port = 3000

const getDate = require('./getDate')

app.use(function (req, res, next) {
    const filename = path.toNamespacedPath(req.url);
    const date = getDate();
    const result = date + ' --- Klient wysłał zapytanie o plik ' + filename
    console.log(result);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(port, () => {
    const result = getDate() + ' --- Serwer uruchomiony na porcie ' + port
    console.log(result)
})