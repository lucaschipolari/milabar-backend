import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import HttpCodes from 'http-status-codes';
import UserModel from '../../../models/UserSchema.js';
import { internalError } from '../../../helpers/helpers.js';


export class PostController {
  static async postUser(req, res) {
    const { body } = req;
    try {
      const existingUser = await UserModel.findOne({ email: body.email });
      if (existingUser) {
        return res.status(HttpCodes.CONFLICT).json({
          data: null,
          message: 'El correo ya está en uso',
        });
      }
      const hashedPassword = bcrypt.hashSync(body.password, 10);
      const newUser = new UserModel({
        username: body.username,
        email: body.email,
        password: hashedPassword,
      });
      await newUser.save();
      const token = jwt.sign(
        { id: newUser._id },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.status(HttpCodes.CREATED).json({
        data: null,
        message: 'Usuario guardado correctamente',
      });
    } catch (e) {
      internalError(res, e, 'Ocurrió un error al guardar el usuario');
    }
  }
}
