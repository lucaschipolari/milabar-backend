import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../../models/UserSchema.js';

export class PostController{
  // Registro de usuario
 static async register  (req, res)  {
  try {
    const { username, email, password } = req.body;
    
    console.log('Datos recibidos:', { username, email, password });

    // Verificar si el usuario ya existe
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    // Cifrar la contraseña antes de guardarla
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Crear y guardar el nuevo usuario
    user = new User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();

    // Generar el token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({ msg: 'Usuario registrado con éxito', token });
  } catch (error) {
    console.error('Error en el registro del usuario:', error);
    return res.status(500).json({ msg: 'Error en el registro del usuario' });
  }
};

// Inicio de sesión
static async login (req, res)  {
  try {
    const { email, password } = req.body;

    // Buscar al usuario por email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Usuario no encontrado' });
    }

    // Comparar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Contraseña incorrecta' });
    }

    // Generar el token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({ msg: 'Inicio de sesión exitoso', token });
  } catch (error) {
    return res.status(500).json({ msg: 'Error en el inicio de sesión' });
  }
};
}

