const express = require("express")
const { engine } = require("express-handlebars")
const app = express()
const port = 8000
const path = require("path")
const router = require("./routers/Routers")
const session = require("express-session")


app.use(express.static(path.join(__dirname, "public")))

app.engine("handlebars", engine({
    defaultLayout: "main",
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    }
}))

app.set("view engine", "handlebars")


app.use(session({
    secret: 'senhaDoSistemaDeFinanças',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router)

app.listen(port, () => {
    console.log("site online no ar: http://localhost:8000")
})