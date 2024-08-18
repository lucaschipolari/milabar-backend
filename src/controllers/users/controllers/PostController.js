import UserModel from '../../../models/UserSchemaPrueba.js';

export class PostController {
  static async createUser(req, res) {
    // Implement create user logic here
    const { body } = req;
    const user = new UserModel({
      username: body.username,
      email: body.email,
      password: body.password,
    });
    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
}
