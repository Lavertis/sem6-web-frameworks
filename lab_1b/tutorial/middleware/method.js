let method = (req, res, next) => {
    console.log("Metoda: ", req.method)
    let path = "Ścieżka: " + req.protocol + "://" + req.get('host') + req.originalUrl
    console.log(path)
    next()
}

module.exports = method