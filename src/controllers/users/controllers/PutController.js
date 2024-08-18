import User from '../../../models/UserSchemaPrueba.js';

export class PutController {
  static async toggleUserStatus(req, res) {
    try {
      const {
        body: { isEnabled },
        params: { id },
      } = req;
      if (typeof isEnabled !== 'boolean') {
        return res.status(400).json({ message: 'Invalid status value' });
      }
      const user = await User.findByIdAndUpdate(
        id,
        { isEnabled },
        { new: true }, // Devuelve el usuario actualizado
      ).select('username email isEnabled');

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
}
