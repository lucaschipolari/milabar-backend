import HttpCodes from 'http-status-codes';
import ProductoModel from '../../../models/productoSchema.js';
import { internalError } from '../../../helpers/helpers.js';

export class PostController {

    static async postProductos(req,res){
        const {body}=req;
        const newProducto = new ProductoModel({
            nombre:body.nombre,
            descripcion:body.descripcion,
            categoria:body.categoria,
            unidadmedida:body.unidadmedida,
            preciounitario:body.preciounitario,
            imagen:body.imagen,
            habilitado:body.habilitado,
            agregado:body.agregado
        });
        try{
            await newProducto.save();
            res.status(HttpCodes.CREATED).json({
                data:null,
                message: 'Producto guardado correctamente',
            })
        }catch(e){
            internalError(
                res,
                e,
                'Ocurrió un error al guardar el producto',
            );
        }
    }
  }
}
