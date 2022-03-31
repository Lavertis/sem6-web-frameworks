const express = require('express')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');

const app = express()
const port = 3000

// Creating session
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: {maxAge: oneDay},
    resave: false
}));

// cookie parser middleware
app.use(cookieParser());

const visitCountMap = new Map();

app.get('/', (req, res) => {
    const sessionId = req.sessionID;
    if (visitCountMap.has(sessionId)) {
        visitCountMap.set(sessionId, visitCountMap.get(sessionId) + 1);
    } else {
        visitCountMap.set(sessionId, 1);
    }

    res.send(`Odwiedziłeś stronę: ${visitCountMap.get(sessionId)} razy`);
})

app.listen(port, () => {
    console.log(`Server działa na porcie: ${port}`)
})