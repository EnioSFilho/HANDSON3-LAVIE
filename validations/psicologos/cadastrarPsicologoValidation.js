const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().required().min(4),
    nome: Joi.string().required(),
    apresentacao: Joi.string()
  }),
}); 