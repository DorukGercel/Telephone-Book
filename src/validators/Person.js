const Joi = require("joi");

const createPerson = Joi.object({
  first_name: Joi.string().required().min(2),
  last_name: Joi.string().required().min(2),
  email: Joi.string().email().required().min(8),
  tel_no: Joi.string().required().regex(/^0[0-9]{10}/).min(11).max(11),
});

module.exports = {
  createPerson
};
