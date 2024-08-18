import HttpCodes from 'http-status-codes';
import ProductoModel from '../../../models/productoSchema.js';
import { internalError } from '../../../helpers/helpers.js';


export class GetController{
    static async getProductos(_,res){
        try{
            const data = await ProductoModel.find({
                isActive:true,
            });

            const filteredData = data.map((producto)=>{
                return{
                    id:producto._doc._id,
                    nombre:producto._doc.nombre,
                    descripcion:producto._doc.descripcion,
                    categoria:producto._doc.categoria,
                    unidadmedida:producto._doc.unidadmedida,
                    preciounitario:producto._doc.preciounitario,
                    imagen:producto._doc.imagen,
                    habilitado:producto._doc.habilitado
                }
            })
    
            res.json({
                data:filteredData,
                message:null,
            });
        }catch(e){
            console.error(e);
            res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
                data:null,
                message:'Ocurrió un error al leer la lista de productos'
            })
        }
        
    }

    static async getProducto(req,res){
        const {params:{id}}=req;
        try{
            const data = await ProductoModel.findOne({
                isActive:true,
                _id:id,
            });

            const formattedData = {
                id:data._doc._id,
                nombre:data._doc.nombre,
                descripcion:data._doc.descripcion,
                categoria:data._doc.categoria,
                unidadmedida:data._doc.unidadmedida,
                preciounitario:data._doc.preciounitario,
                imagen:data._doc.imagen,
                habilitado:data._doc.habilitado
            }
    
            res.json({
                data:formattedData,
                message:'Producto encontrado correctamente',
            });
        }catch(e){
            internalError(
                res,
                e,
                'Ocurrió un error al leer la lista de productos',
            );
        }
    }

}