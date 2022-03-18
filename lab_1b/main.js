const express = require('express')
const path = require("path");
const {check, validationResult} = require("express-validator");

const PORT = process.env.PORT || 3000
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(
    express.urlencoded({extended: true}),
    express.json()
)

app.use('/api/users', require('./api/routes'))

app.get('/', function (req, res) {
    res.send('Żadanie GET: Szkielet programistyczny Express!')
})

app.get('/about', (req, res) => {
    res.render('about', {name: 'Jan'})
})

// app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, 'views'))
//
// app.get('/info', (req, res) => {
//     res.render('info', {name: 'Jan'})
// })

app.get('/name/:imie1/:imie2', function (request, response) {
    response.status(200)
    response.set('Content-Type', 'text/html')
    response.end('<html lang="pl"><body>' + '<h1>Cześć ' + request.params.imie1 + ' i ' + request.params.imie2 + '</h1>' + '</body></html>'
    )
})

app.get("/form1", (req, res) => {
    res.sendFile(path.join(__dirname, "form1.html"))
})

app.post("/form1", (req, res) => {
    let username = req.body.username
    let password = req.body.password
    let fullName = req.body.full_name

    if (!username || !password || !fullName) {
        res.send("Uzupełnij dane")
        return
    }

    let data = `Użytkownik: ${username}<br>` + `Hasło: ${password}<br>` + `Imię i nazwisko: ${fullName}<br>` +
        `Znajomość języków:`;

    const languages = req.body.languages
    if (languages) {
        data += "<ul>"
        languages.forEach(language => data += `<li>${language}</li>`)
        data += "</ul>"
    }

    res.send(data)
})

app.get("/form2", (req, res) => {
    res.sendFile(path.join(__dirname, "form2.html"))
})

const extractInitials = value => {
    let a = value.split(' ')
    return a[0][0] + a[1][0]
}

app.post("/form2", [
    check('full_name')
        .trim().stripLow().bail()
        .isLength({min: 3, max: 25}).isAlpha("pl-PL", {ignore: ' '})
        .customSanitizer(value => extractInitials(value)).toUpperCase()
        .withMessage("Niepoprawne nazwisko"),
    check('email')
        .trim().normalizeEmail().stripLow().bail()
        .isEmail()
        .withMessage("Email ma zły format"),
    check('age')
        .trim().stripLow().bail()
        .isInt({min: 0, max: 110})
        .withMessage("Wiek musi należeć do przedziału 1-110")
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()})
    }
    const fullName = req.body.full_name
    const email = req.body.email
    const age = req.body.age
    res.send("Użytkownik: " + fullName + "<br>Email: " + email + "<br>Wiek: " + age)
})

app.listen(PORT, () => console.log(`Server działa na porcie: ${PORT}`))