const express = require("express")
const router = express.Router()

router.post("/", (req, res) => {
    const { name, password } = req.body;
    console.log(name, password);
    res.send(`name: ${name} and password: ${password}`);
});

router.get("/login", (req, res) => {
    res.render("login")
})

module.exports = router