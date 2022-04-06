let middlewareMethod = (req, res, next) => {
    const method = "Metoda: " + req.method
    const path = "Ścieżka: " + req.protocol + "://" + req.get('host') + req.originalUrl
    console.log(path)
    console.log(method)
    res.send(path + '\n' + method)
    next()
}

module.exports = middlewareMethod