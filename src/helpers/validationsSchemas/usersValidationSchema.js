import Joi from 'joi';

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

export const post_userValidationSchema = Joi.object({
  username: Joi.string().trim().min(3).max(30).required().messages({
    'string.min': "El campo 'username' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'username' debe tener como mucho 30 caracteres",
    'any.required': "El campo 'username' es requerido",
    '*': "Revisa el campo 'username'",
  }),
  email: Joi.string()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    'string.email': 'Por favor, ingrese un email válido',
    'string.empty': 'El email es requerido',
    'any.required': 'El email es requerido'
  }),
  password: Joi.string().trim().regex(passwordRegex).required().messages({
    'string.pattern.base':
      "El campo 'password' debe tener una minúscula, una mayúscula, un dígito, y un caracter especial, entre 8 y 15 caracteres",
    'any.required': "El campo 'password' es requerido",
    '*': "Revisa el campo 'password'",
  }),
});