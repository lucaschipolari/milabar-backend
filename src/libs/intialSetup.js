import bcrypt from 'bcryptjs';
import Role from '../models/roleSchema.js';
import User from '../models/UserSchema.js';

export const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count > 0) return;
    const values = await Promise.all(
      ['admin', 'user', 'moderator', 'superadmin'].map(async (role) => {
        const newRole = new Role({ name: role });
        await newRole.save();
      }),
    );
    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const initializeAdmin = async () => {
  try {
    // Verifica si ya existe un administrador
    const defaultRoleAdmin = await Role.findOne({ name: 'superadmin' });
    if (!defaultRoleAdmin) {
      throw new Error('Rol superadmin no encontrado');
    }

    const adminExists = await User.findOne({ roles: defaultRoleAdmin._id });
    const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);

    if (!adminExists) {
      // Si no existe un administrador, crea uno por defecto
      const admin = new User({
        username: 'admin',
        email: 'super@admin.com',
        password: hashedPassword,
        roles: [defaultRoleAdmin._id],
        isEnabled: true,
      });

      await admin.save();
      console.log('Administrador por defecto creado');
    } else {
      console.log('Ya existe un administrador');
    }
  } catch (error) {
    console.error('Error al inicializar el administrador:', error);
  }
};
