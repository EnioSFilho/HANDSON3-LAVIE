const { validate, Joi } = require("express-validation");

module.exports = validate({
  body: Joi.object({
    email: Joi.string().email().required(),
    idade: Joi.date().required(),
    nome: Joi.string().required()
  }),
}); 