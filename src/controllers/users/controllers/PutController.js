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

  static async putUsers(req,res){
    const{
        body,
        params:{id},
    }=req;
    try{
        const action = await User.updateOne({
            _id:id,
        }, body);
        
        if(action.matchedCount === 0){
            res.status(HttpCodes.BAD_REQUEST).json({
                data:null,
                message:'El usuario no existe',
            });
            return;
        }
        res.json({
            data:null,
            message:'Usuario actualizado correctamente'
        });
    }catch(e){
        internalError(
            res,
            e,
            'Ocurrió un error actualizando el recurso indicado',
        );

}
}
}
