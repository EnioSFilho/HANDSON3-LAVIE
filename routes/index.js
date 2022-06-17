const express = require("express");
const PsicologosController = require("../controllers/psicologos.controller")
const PacientesController = require("../controllers/pacientes.controller")
const cadastrarPsicologoValidation = require('../validations/psicologos/cadastrarPsicologoValidation');
const cadastrarPacienteValidation = require('../validations/pacientes/cadastrarPacienteValidation');
const AuthController = require("../controllers/auth.controller");
const auth = require('../middleware/auth');
const atendimentosController = require("../controllers/atendimentos.controller")

const routes = express.Router();

// Importar os controllers do porjeto exemplo linha abaixo
// const GenderController = require('../controllers/gender.controller');


// Rotas Login
routes.post('/login',AuthController.login);

// Rotas Psicologos
routes.get('/psicologos',PsicologosController.listarPsicologos);
routes.get('/psicologos/:id',PsicologosController.listarPsicologoId);
routes.post('/psicologos/cadastro',cadastrarPsicologoValidation ,PsicologosController.cadastrarPsicologo);
routes.put('/psicologos/:id/atualizar',cadastrarPsicologoValidation,PsicologosController.atualizarPsicologo);
routes.delete('/psicologos/:id/deletar',PsicologosController.deletarPsicologo);

// Rotas Pacientes
routes.get('/pacientes/',PacientesController.listarPacientes);
routes.get('/pacientes/:id',PacientesController.listarPacienteId);
routes.post('/pacientes/cadastrar',cadastrarPacienteValidation ,PacientesController.cadastrarPaciente);
routes.put('/pacientes/:id/atualizar',cadastrarPacienteValidation,PacientesController.atualizarPaciente);
routes.delete('/pacientes/:id/deletar',PacientesController.deletarPaciente);

// Rotas Atendimentos
routes.post('/atendimentos/cadastro',auth, atendimentosController.cadastrarAtendimento )
routes.get('/atendimentos', atendimentosController.buscarAtendimento)
routes.get('/atendimentos/:id', atendimentosController.buscarAtendimentoId)

module.exports = routes;
