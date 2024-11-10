const { Sequelize, sequelize } = require("./Bd")


const user = sequelize.define("user", {
    iduser: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull:false
    },
    dataNasc: {
        type: Sequelize.DATE,
        allowNull: false
    },
    saldo: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: "user",
    timestamps: false
})

module.exports = user