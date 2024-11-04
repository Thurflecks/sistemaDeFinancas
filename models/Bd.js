const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("financas", "root", "", {
    dialect: "mysql",
    host: "localhost",
})

sequelize.authenticate().then(() => {
    console.log("Banco de dados conectado")
}).catch((err) => {
    console.log("Erro ao conectar ao banco de dados")
})

module.exports = {
    Sequelize, sequelize
}