import mongoose from 'mongoose';

const Producto = new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    categoria:{
        type:String,
        required:true,
    },
    unidadmedida:{
        type:String,
        required:true,
    },
    preciounitario:{
        type:Number,
        required:true,
    },
    imagen:{
        type:String,
        required:true,
    },
    estaHabilitado:{
        type:Boolean,
        required:true,
        default:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    }
});

export default mongoose.model('Productos', Producto);