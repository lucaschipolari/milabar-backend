import HttpCodes from 'http-status-codes';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../../models/UserSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {
  static async login(req, res) {
    const { body } = req;

    try {
      const user = await User.findOne({
        email: body.email,
        isEnabled: true,
      }).populate('roles', 'name');

      if (!user) {
        return res.status(HttpCodes.UNAUTHORIZED).json({
          data: null,
          message: 'El mail no está registrado o ha sido inhabilitado',
        });
      }

      if (!bcrypt.compareSync(body.password, user.password)) {
        return res.status(HttpCodes.UNAUTHORIZED).json({
          data: null,
          message: 'Mail y/o contraseña incorrecto/a',
        });
      }

      const userInfo = {
        user: {
          id: user._doc._id,
          username: user._doc.username,
          email: user._doc.email,
          roles: user._doc.roles,
          isEnabled: user._doc.isEnabled,
        },
      };

      const token = jwt.sign(userInfo, process.env.JWT_SECRET, {
        expiresIn: '10h',
      });

      res.json({
        data: token,
        message: 'Logueo exitoso',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error intentando iniciar sesión');
    }
  }
}
