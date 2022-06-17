const Psicologos = require('../models/psicologos');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const secret = require("../config/secret");

const AuthController = {
    async login(req, res){
        try {
            const {email, senha} = req.body;
            const userLogado = await Psicologos.findOne({
                where: {
                    email,
                }
            });

            if(!userLogado){
                return res.status(404).json('Usuario inexistente na base de dados')
            }else {
                if(!bcrypt.compareSync(senha, userLogado.senha)){
                    return res.status(404).json('Senha invalida')
                }
            }
            
            const token = jwt.sign({
                id: userLogado.id,
                nome: userLogado.nome,
                email: userLogado.email
            }, secret.key);

            return res.json(token);
        } catch (error) {
            console.log('Login não realizado');
            console.error(error);
            return res.status(500).json('Erro ao realizar login');
        }

    }
}

module.exports = AuthController;