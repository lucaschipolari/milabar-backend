import Joi from 'joi';

export const post_contactValidationSchema = Joi.object({
  issue: Joi.string()
    .trim()
    .min(5)
    .max(50)
    .required()
    .regex(/^[A-Za-zñÑáéíóúÁÉÍÓÚ0-9\s.,!?()-]+$/)
    .messages({
      'string.empty': 'El campo asunto es requerido',
      'string.min': 'El campo asunto debe tener al menos 5 caracteres',
      'string.max': 'El campo asunto debe tener un máximo de 50 caracteres',
      'string.pattern.base':
        'El campo asunto solo puede contener letras, números, espacios y ciertos caracteres de puntuación (. , ! ? () -)',
      '*': 'Revisa el campo Asunto',
    })
    .custom((value, helpers) => {
      if (/\s{2,}/.test(value)) {
        return helpers.message(
          'El campo asunto no puede contener múltiples espacios consecutivos',
        );
      }
      return value;
    }),

  name: Joi.string()
    .trim()
    .min(2)
    .max(30)
    .required()
    .regex(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/)
    .messages({
      'string.empty': 'El campo nombre es requerido',
      'string.min': 'El campo nombre debe tener al menos 2 caracteres',
      'string.max': 'El campo nombre debe tener un máximo de 30 caracteres',
      'string.pattern.base': 'El campo nombre solo puede contener letras',
      '*': 'Revisa el campo nombre',
    })
    .custom((value, helpers) => {
      if (/\s{2,}/.test(value)) {
        return helpers.message(
          'El campo nombre no puede contener múltiples espacios consecutivos',
        );
      }
      return value;
    }),

  lastname: Joi.string()
    .trim()
    .min(2)
    .max(30)
    .required()
    .regex(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/)
    .messages({
      'string.empty': 'El campo apellido es requerido',
      'string.min': 'El campo apellido debe tener al menos 2 caracteres',
      'string.max': 'El campo apellido debe tener un máximo de 30 caracteres',
      'string.pattern.base': 'El campo apellido solo puede contener letras',
      '*': 'Revisa el campo apellido',
    })
    .custom((value, helpers) => {
      if (/\s{2,}/.test(value)) {
        return helpers.message(
          'El campo apellido no puede contener múltiples espacios consecutivos',
        );
      }
      return value;
    }),

  email: Joi.string()
    .trim()
    .max(254)
    .required()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .messages({
      'string.empty': 'El campo email es requerido',
      'string.max': 'El campo email no puede exceder los 254 caracteres',
      'string.pattern.base': 'El formato del correo electrónico no es válido',
      '*': 'Revisa el campo email',
    }),

  message: Joi.string()
    .trim()
    .min(10)
    .max(500)
    .required()
    .regex(/^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/)
    .messages({
      'string.empty': 'El campo mensaje es requerido',
      'string.min': 'El campo mensaje debe tener al menos 10 caracteres',
      'string.max': 'El campo mensaje debe tener un máximo de 500 caracteres',
      'string.pattern.base':
        'El campo mensaje solo puede contener letras, números y ciertos caracteres de puntuación (. , ! ? () -)',
      '*': 'Revisa el campo mensaje',
    })
    .custom((value, helpers) => {
      if (/\s{2,}/.test(value)) {
        return helpers.message(
          'El campo mensaje no puede contener múltiples espacios consecutivos',
        );
      }
      return value;
    }),
});
