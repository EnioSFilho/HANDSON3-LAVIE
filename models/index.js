const Pacientes = require("./pacientes")
const Psicologos = require("./psicologos")
const Atendimentos = require("./atendimentos")

Atendimentos.hasMany(Psicologos, {
    foreignKey: "psicologos_id1"
})

Atendimentos.hasMany(Pacientes, {
    foreignKey: "pacientes_id"
})


module.exports = {
    Pacientes,
    Psicologos,
    Atendimentos
}