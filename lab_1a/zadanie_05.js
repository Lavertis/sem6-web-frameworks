const http = require('http')
const url = require('url')
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    let q = url.parse(req.url, true).query
    let bok1 = parseFloat(q.bok1)
    let bok2 = parseFloat(q.bok2)
    let bok3 = parseFloat(q.bok3)
    let p = (bok1 + bok2 + bok3) / 2
    let result = Math.sqrt(p * (p - bok1) * (p - bok2) * (p - bok3))
    let txt = `<p>Bok 1: ${bok1}</p>` +
        `<p>Bok 2: ${bok2}</p>` +
        `<p>Bok 3: ${bok3}</p>` +
        `<p>Pole: ${result}</p>`
    res.end(txt)
}).listen(3000)