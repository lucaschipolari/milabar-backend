import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Asegura que no haya correos duplicados
    match: [/.+@.+\..+/, 'El correo electrónico no es válido'], // Validación de formato
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    enum: ['user', 'admin', 'moderator'],
    default: ['admin'],
  },
  orderCount: {
    type: Number,
    default: 0,
  },
  avatar: {
    type: String,
    default: 'default-avatar.png', // Usa una ruta relativa en lugar de una URL completa
  },
  isEnabled: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('User', userSchema);
