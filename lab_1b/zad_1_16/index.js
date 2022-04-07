const http = require('http')
const fs = require('fs')
const path = require('path');
const port = process.env.PORT || 3000
const getDate = require('./getDate')

function serveStaticFile(res, filePath, contentType, responseCode = 200) {
    fs.readFile(path.join(__dirname, filePath), (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'})
            return res.end('500 - Blad wewnetrzny')
        }

        const date = getDate();
        const result = date + ' --- Klient wysłał zapytanie o plik ' + filePath
        console.log(result);

        res.writeHead(responseCode, {'Content-Type': contentType})
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/scripts/script.js':
            serveStaticFile(res, 'scripts/script.js', 'text/javascript')
            break
        case '/styles/css/style.css':
            serveStaticFile(res, 'styles/css/style.css', 'text/css')
            break
        case '/index.html':
            serveStaticFile(res, 'index.html', 'text/html')
            break
    }
})

server.listen(port, () =>
    console.log(getDate() + ` === Serwer zostaje uruchomiony na porcie ${port}.`)
)