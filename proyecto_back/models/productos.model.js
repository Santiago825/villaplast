const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const ProductosSchema=new Schema({
    codigo_producto:{type:String,required:true,max:60},
    nombre_producto:{type:String,required:true,max:60},
    marca:{type:String,required:true,max:40},
    descripcion:{type:String,required:true,max:300},
    precio:{type:String,required:true,max:60},

});
module.exports=mongoose.model("productos",ProductosSchema);