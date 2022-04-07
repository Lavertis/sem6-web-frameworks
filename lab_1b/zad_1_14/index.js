const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const routes = require('./api/routes')

const middlewareMethod = require('./middleware/method')

app.use(express.json())
app.use('/api/users', routes)

app.post('/', middlewareMethod, (req, res) => {

})

app.put('/', middlewareMethod, (req, res) => {

})

app.delete('/', middlewareMethod, (req, res) => {

})

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))