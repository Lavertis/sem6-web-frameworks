const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const toRad = Boolean(req.query.toRad);
    const value = parseFloat(req.query.value);

    if (toRad === true)
        res.send(`${Math.PI * value / 180}`);
    else
        res.send(`${value * 180 / Math.PI}`);
})

app.listen(port, () => {
    console.log(`Server działa na porcie: ${port}`)
})