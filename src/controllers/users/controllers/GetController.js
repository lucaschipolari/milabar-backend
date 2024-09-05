// GetController.js
import User from '../../../models/UserSchema.js';

export class GetController {
  static async getUsersAble(_, res) {
    try {
      const users = await User.find({ isEnabled: true }).populate(
        'roles',
        'name',
      );
      const filteredUsers = users.map((user) => ({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: user.roles.map((role) => ({
          id: role._id,
          name: role.name,
        })),
        orderCount: user.orderCount,
        avatar: user.avatar,
        isEnabled: user.isEnabled,
      }));
      res.json({ data: filteredUsers, message: null });
    } catch (e) {
      console.error('Error fetching users:', e);
      res.status(500).json({ message: 'Error fetching users' });
    }
  }

  static async getUsersDisable(_, res) {
    try {
      const users = await User.find({ isEnabled: false }).populate('roles');
      const filteredUsers = users.map((user) => ({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: user.roles.map((role) => ({
          id: role._id,
          name: role.name,
        })),
        orderCount: user.orderCount,
        avatar: user.avatar,
        isEnabled: user.isEnabled,
      }));
      res.json({ data: filteredUsers, message: null });
    } catch (e) {
      console.error('Error fetching disabled users:', e);
      res.status(500).json({ message: 'Error fetching users' });
    }
  }

  static async getUserById(req, res) {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).populate('roles', 'name');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const userFiltered = {
        id: user._id,
        username: user.username,
        email: user.email,
        roles: user.roles.map((role) => ({
          id: role._id,
          name: role.name,
        })),
        orderCount: user.orderCount,
        avatar: user.avatar,
        isEnabled: user.isEnabled,
      };
      res.json({ data: userFiltered, message: null });
    } catch (e) {
      console.error('Error fetching user by ID:', e);
      res.status(500).json({ message: 'Error fetching user' });
    }
  }

  static async getUserByIdGeneral(req, res) {
    const { id } = req.params;
    try {
      const user = await User.findById(id).populate('roles');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      const userFiltered = {
        id: user._id,
        username: user.username,
        email: user.email,
        roles: user.roles.map((role) => ({
          id: role._id,
          name: role.name,
        })),
        orderCount: user.orderCount,
        avatar: user.avatar,
        isEnabled: user.isEnabled,
      };
      res.json({ data: userFiltered, message: null });
    } catch (e) {
      console.error('Error fetching user by ID general:', e);
      res.status(500).json({ message: 'Error fetching user' });
    }
  }
}
