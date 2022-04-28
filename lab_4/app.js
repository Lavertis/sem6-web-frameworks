const express = require("express")
const path = require("path")
const handleBars = require("handlebars")
const expressHandleBars = require("express-handlebars")
const {allowInsecurePrototypeAccess} = require("@handlebars/allow-prototype-access")
const logger = require('morgan');
const studentsRouter = require('./src/controllers/StudentController');

const connection = require('./src/data/Database')
connection()

const app = express()

app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));

app.set("views", path.join(__dirname, "/src/views"))
app.set("view engine", "hbs")

app.engine(
    "hbs",
    expressHandleBars.engine({
        handlebars: allowInsecurePrototypeAccess(handleBars),
        extname: "hbs",
        defaultLayout: "./src/views/layouts/default",
        layoutsDir: __dirname,
    })
)

app.use('/students', studentsRouter);

module.exports = app;