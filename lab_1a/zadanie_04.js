const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

function serveStaticFile(res, path, contentType, responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'})
            return res.end('500 - Blad wewnetrzny')
        }
        res.writeHead(responseCode, {'Content-Type': contentType})
        res.end(data)
    })
}

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            serveStaticFile(res, '/public/home.html', 'text/html')
            break
        case '/about':
            serveStaticFile(res, '/public/about.html', 'text/html')
            break
        case '/image/bird.jpeg':
            serveStaticFile(res, '/public/img/bird.jpeg', 'image/jpeg')
            break
        case '/image/parrot.jpg':
            serveStaticFile(res, '/public/img/parrot.jpg', 'image/jpeg')
            break
        case '/image/tucan.jpg':
            serveStaticFile(res, '/public/img/tucan.jpg', 'image/jpeg')
            break
        default:
            serveStaticFile(res, '/public/404.html', 'text/html')
            break
    }
})
server.listen(port, () => console.log(`Serwer działa na porcie ${port}; ` + 'naciśnij Ctrl+C, aby zakończyć')
)