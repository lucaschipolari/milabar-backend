import HttpCodes from 'http-status-codes';
import User from '../../../models/UserSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PutController {
  static async toggleUserStatus(req, res) {
    try {
      const {
        body: { isEnabled },
        params: { id },
      } = req;

      // Verificar que isEnabled sea un booleano
      if (typeof isEnabled !== 'boolean') {
        return res.status(400).json({ message: 'Invalid status value' });
      }

      // Buscar el usuario por ID
      const user = await User.findById(id).select(
        'username email isEnabled isAdmin',
      );

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // No permitir la deshabilitación de usuarios administradores
      if (user.isAdmin && !isEnabled) {
        return res
          .status(403)
          .json({ message: 'Cannot disable an admin user' });
      }

      // Si el usuario no es administrador o se está habilitando, actualizar el estado
      if (!user.isAdmin || isEnabled) {
        user.isEnabled = isEnabled;
        await user.save();
        return res.status(200).json(user);
      }
      // Si se intenta deshabilitar un usuario administrador
      return res
        .status(403)
        .json({ message: 'Cannot modify admin user status' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }

  static async putUsers(req, res) {
    const {
      body,
      params: { id },
    } = req;
    try {
      const action = await User.updateOne(
        {
          _id: id,
        },
        body,
      );

      if (action.matchedCount === 0) {
        res.status(HttpCodes.BAD_REQUEST).json({
          data: null,
          message: 'El usuario no existe',
        });
        return;
      }
      res.json({
        data: null,
        message: 'Usuario actualizado correctamente',
      });
    } catch (e) {
      internalError(
        res,
        e,
        'Ocurrió un error actualizando el recurso indicado',
      );
    }
  }
}
