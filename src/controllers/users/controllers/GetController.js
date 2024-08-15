import User from '../../../models/UserSchemaPrueba.js';

export class GetController {
  static async getUsersAble(_, res) {
    try {
      const users = await User.find({ isEnabled: true });
      const filteredUsers = users.map((user) => {
        return {
          username: user._doc.username,
          email: user._doc.email,
          role: user._doc.role,
          orderCount: user._doc.orderCount,
          avatar: user._doc.avatar,
          createdAt: user._doc.createdAt,
          updatedAt: user._doc.updatedAt,
          isEnabled: user._doc.isEnabled, // Added property for enabling/disabling user
        };
      });
      res.json({ filteredUsers, message: null });
    } catch (e) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  }

  static async getUsersDisable(_, res) {
    try {
      const users = await User.find({ isEnabled: false });
      const filteredUsers = users.map((user) => {
        return {
          id: user._doc._id,
          username: user._doc.username,
          email: user._doc.email,
          role: user._doc.role,
          orderCount: user._doc.orderCount,
          avatar: user._doc.avatar,
          createdAt: user._doc.createdAt,
          updatedAt: user._doc.updatedAt,
          isEnabled: user._doc.isEnabled, // Added property for enabling/disabling user
        };
      });
      res.json({ filteredUsers, message: null });
    } catch (e) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  }
}
