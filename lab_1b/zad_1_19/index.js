const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const sessionId = req.cookies.sessionId;
    console.log(sessionId);
})

app.listen(port, () => {
    console.log(`Server działa na porcie: ${port}`)
})