import Joi from 'joi';

export const post_shoppingCartValidationSchema = Joi.object({
  tableNumber: Joi.number().required().min(1).max(20).messages({
    'number.base': 'El número de mesa debe ser un número',
    'number.required': 'El número de mesa es obligatorio',
    'number.min': 'El número de mesa debe ser al menos 1',
    'number.max': 'El número de mesa no puede ser mayor a 20',
  }),
  details: Joi.string()
    .min(10)
    .max(500)
    .regex(/^[A-Za-zñÑáéíóúÁÉÍÓÚ0-9\s.,!?()-]*$/)
    .messages({
      'string.base': 'El detalle debe ser una cadena de texto',
      'string.empty': 'El campo detalle no puede estar vacío',
      'string.min': 'El detalle debe tener al menos 10 caracteres',
      'string.max': 'El detalle debe tener un máximo de 500 caracteres',
      'string.pattern.base':
        'El detalle solo puede contener letras, números y ciertos caracteres de puntuación',
    })
    .custom((value, helpers) => {
      if (/\s{2,}/.test(value)) {
        return helpers.message(
          'El campo detalle no puede contener múltiples espacios consecutivos',
        );
      }
      if (/^\s*$/.test(value)) {
        return helpers.message(
          'El campo detalle no puede estar compuesto solo de espacios en blanco',
        );
      }
      return value;
    }),
});
