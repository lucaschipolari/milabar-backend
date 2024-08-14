import HttpCodes from 'http-status-codes';
import ProductoModel from '../../../models/productoSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PutController{
    static async putProductos(req,res){
        const{
            body,
            params:{id},
        }=req;
        try{
            const action = await ProductoModel.updateOne({
                _id:id,
            }, body,);
            
            if(action.matchedCount === 0){
                res.status(HttpCodes.BAD_REQUEST).json({
                    data:null,
                    message:'El producto no existe',
                });
                return;
            }
            res.json({
                data:null,
                message:'Producto actualizado correctamente'
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