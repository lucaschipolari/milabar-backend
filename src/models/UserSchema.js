import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
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
    roles: [
      {
        ref: 'Role',
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    orderCount: {
      type: Number,
      default: 0,
    },
    avatar: {
      type: String,
      default:
        'https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg', // Usa una ruta relativa en lugar de una URL completa
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
  },
  {
    versionKey: false,
  },
);

export default mongoose.model('User', userSchema);
