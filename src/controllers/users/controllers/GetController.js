import User from '../../../models/UserSchema.js';

export class GetController {
  static async getUsersAble(_, res) {
    try {
      const users = await User.find({ isEnabled: true });
      const filteredUsers = users.map((user) => {
        return {
          id: user._doc._id,
          username: user._doc.username,
          email: user._doc.email,
          role: user._doc.role,
          orderCount: user._doc.orderCount,
          avatar: user._doc.avatar,
          isEnabled: user._doc.isEnabled,
        };
      });
      res.json({ data: filteredUsers, message: null });
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
          isEnabled: user._doc.isEnabled,
        };
      });
      res.json({ data: filteredUsers, message: null });
    } catch (e) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = req.user.id;
      console.log(userId);
      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const userFiltered = {
        id: user._id,
        username: user._doc.username,
        email: user._doc.email,
        role: user._doc.role,
        orderCount: user._doc.orderCount,
        avatar: user._doc.avatar,
        isEnabled: user._doc.isEnabled,
      };
      res.json({ data: userFiltered, message: null });
    } catch (e) {
      res.status(500).json({ message: 'Error fetching user' });
    }
  }
}
