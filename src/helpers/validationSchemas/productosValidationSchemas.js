import Joi from 'joi';

export const post_put_productoValidationSchema = Joi.object({
  nombre: Joi.string().trim().min(3).max(30).required().messages({
    'string.min': "El campo 'nombre' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'nombre' debe tener como mucho 30 caracteres",
    'any.required': "El campo 'nombre' es requerido",
    '*': "Revisa el campo 'nombre'",
  }),
  descripcion: Joi.string().trim().min(3).max(100).required().messages({
    'string.min': "El campo 'descripcion' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'descripcion' debe tener como mucho 100 caracteres",
    'any.required': "El campo 'descripcion' es requerido",
    '*': "Revisa el campo 'descripcion'",
  }),
  categoria: Joi.string().trim().min(3).max(100).required().messages({
    'string.min': "El campo 'categoria' debe tener como mínimo 3 caracteres",
    'string.max': "El campo 'categoria' debe tener como mucho 100 caracteres",
    'any.required': "El campo 'categoria' es requerido",
    '*': "Revisa el campo 'categoria'",
  }),
  unidadmedida: Joi.string().trim().min(1).max(100).required().messages({
    'string.min': "El campo 'unidadmedida' debe tener como mínimo 1 caracteres",
    'string.max': "El campo 'unidadmedida' debe tener como mucho 100 caracteres",
    'any.required': "El campo 'unidadmedida' es requerido",
    '*': "Revisa el campo 'unidadmedida'",
  }),
  preciounitario: Joi.number().min(1).max(100000).required().messages({
    'string.min': "El campo 'preciounitario' debe tener como mínimo 1 caracteres",
    'string.max': "El campo 'preciounitario' debe tener como mucho 100000 caracteres",
    'any.required': "El campo 'preciounitario' es requerido",
    '*': "Revisa el campo 'preciounitario'",
  }),
  imagen: Joi.string().trim().uri().required().messages({
    'string.uri': "El campo 'imagen' debe ser una URL valida",
    'any.required': "El campo 'imagen' es requerido",
    '*': "Revisa el campo 'imagen'",
  }),
  habilitado: Joi.string().required().messages({
    'any.required': "El campo 'habilitado' es requerido",
    '*': "Revisa el campo 'habilitado'",
  }),
});