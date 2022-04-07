const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

let middlewareMethod = (req, res, next) => {
    const method = "Metoda: " + req.method
    const path = "Ścieżka: " + req.protocol + "://" + req.get('host') + req.originalUrl
    console.log(path)
    console.log(method)
    res.send(path + '\n' + method)
    next()
}
app.use('/', middlewareMethod)

app.post('/', (req, res) => {

})

app.put('/', (req, res) => {

})

app.delete('/', (req, res) => {

})

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))