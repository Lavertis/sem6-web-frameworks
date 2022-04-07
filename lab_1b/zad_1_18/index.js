const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    const toRad = Boolean(req.query.toRad);
    const value = parseFloat(req.query.value);

    if (toRad === true) {
        const radians = Math.PI * value / 180;
        res.send(`${value} stopni to ${radians} radianów`);
    } else {
        const degrees = value * 180 / Math.PI;
        res.send(`${value} radianów to ${degrees} stopni`);
    }
})

app.listen(port, () => {
    console.log(`Server działa na porcie: ${port}`)
})