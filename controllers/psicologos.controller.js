const Psicologos = require('../models/Psicologos');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs'); 

const PsicologoController = {
    async cadastrarPsicologo(req, res){
        try {
            const { nome, email, senha, apresentacao } = req.body;
            const novaSenha = bcrypt.hashSync(senha, 10);
            console.log(novaSenha);
            const novoPsicologo = await Psicologos.create({nome, email, senha: novaSenha, apresentacao});
            return res.status(201).json(novoPsicologo)

        } catch (error) {
            res.status(400).json("Não foi possivel cadastrar o psicólogo")
        }
    },
    async listarPsicologos(req, res){
        try {
            const listaDePsicologos = await Psicologos.findAll()
            res.status(200).json(listaDePsicologos)

        } catch (error) {
            res.json("Não foi possível listar os psicólogos")
            console.error(error)
        }
    },
    async listarPsicologoId(req, res){
        const { id } = req.params
        try {
            const psicologoID = await Psicologos.findByPk(id)
            if (!psicologoID){
                return res.status(404).json('Não existe psicólogo com o id informado')
            }
            res.status(200).json(psicologoID)
        } catch (error) {
            res.status(500).json("Não foi possivel listar o psicólogo pelo ID")
        }
    },
    async deletarPsicologo(req, res){
        const { id } = req.params
        try {
            const psicologoId = await Psicologos.destroy({
                where: {
                    id
                }
            })
            res.status(204).json("")

            if (!psicologoId){
                return res.status(404).json('Não existe psicólogo com o esse id')
            }
            
        } catch (error) {
            res.status(400).json("Não foi possivel deletar o psicólogo")
        }
    },

    async atualizarPsicologo (req, res) {
        const { id } = req.params
        try {
            const { nome, email, senha, apresentacao} = req.body;
            const novaSenha = bcrypt.hashSync(senha, 10);
            const atualizarPsicologos = await Psicologos.update(
                {nome, email, senha: novaSenha, apresentacao}, 
                {
                where: {
                    id
                }
            })
            return res.status(201).json("Psicólogo atualizado com sucesso")

        } catch (error) {
            res.status(400).json("Não foi possivel atualizar o psicólogo")
        }
    }   // Listar os métodos deste controller aqui
    // exemplo de sintaxe
    // async nomeMetodo(req, res){

    // }
    
};

module.exports = PsicologoController;