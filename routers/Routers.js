const express = require("express")
const router = express.Router()
const userModel = require("../models/User")
const authenticate = require("../midlleware/authenticate")
const verifyLogin = require("../midlleware/verifyLogin")


router.get("/singIn", verifyLogin,(req, res) => {
    try {
        res.render("singIn")
    } catch (err) {
        console.log(err)
    }
})
router.post("/singIn/logando", verifyLogin, async (req, res) => {
    try {
        const { email, password } = req.body
        await userModel.findOne({
            where: { email: email, senha: password }
        }).then((usuario) => {
            req.session.user = {
                id: usuario.iduser,
                email: usuario.email,
            }
            res.redirect('/')
        }).catch(err => {
            res.send("erro ao logar")
            console.log(err)
        })
    } catch (err) {
        console.log(err)
    }
})

router.post("/signUp/NewAccount", verifyLogin, async (req, res) => {
    try {
        console.log(req.body)
        const { nome, email, endereco, dataNasc, password } = req.body;
        await userModel.create({
            nome: nome,
            email: email,
            senha: password,
            endereco: endereco,
            saldo: 0,
            dataNasc: dataNasc
        });
        res.redirect("/singIn")
    } catch (err) {
        console.log(err)
    }
})

router.get("/", authenticate, async(req, res) => {
    try {
        const User = await userModel.findByPk(req.session.user.id)
      
        res.render("homepage", { User })
    } catch(err) {
        console.log(err)
    }
});

router.get("*/",(rewq, res) => {
    res.send("Nenhuma rota encontrada")
})
module.exports = router