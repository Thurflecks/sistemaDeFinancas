const express = require("express")
const router = express.Router()


router.get("/singIn", (req, res) => {
    res.render("singIn")
})

router.get('/singUp', (req, res) => {
    res.render("singUp")
})

router.post("/", (req, res) => {
  
});
module.exports = router