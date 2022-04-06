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
app.use('/metoda', middlewareMethod)

app.post('/', middlewareMethod, (req, res) => {

})

app.put('/', middlewareMethod, (req, res) => {

})

app.delete('/', middlewareMethod, (req, res) => {

})

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))