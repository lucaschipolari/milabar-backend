import User from '../../../models/UserSchemaPrueba.js';

export class GetController {
  static async getUsers(_, res) {
    try {
      const users = await User.find();
      const filteredUsers = users.map((user) => {
        return {
          id: user._doc._id,
          username: user._doc.username,
          email: user._doc.email,
        };
      });
      res.json({ filteredUsers, message: null });
    } catch (e) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  }
}
