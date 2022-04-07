const express = require('express')
const path = require("path");

const app = express()
const port = 3000

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    let bgColor = req.query.bgColor;
    if (!bgColor) {
        bgColor = 'white';
    }
    res.render('index', {bgColor: bgColor})
})

app.listen(port, () => {
    console.log(`Server działa na porcie: ${port}`)
})