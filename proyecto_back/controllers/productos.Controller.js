const Producto=require("../models/productos.model")
let response={
    msg:"",
    exito:false
}
exports.create=function(req,res){
    let producto=new Producto({
        codigo_producto:req.body.codigo_producto,
        nombre_producto:req.body.nombre_producto,
        marca:req.body.marca,
        descripcion:req.body.descripcion,
        precio:req.body.precio,

    })
    producto.save(function(err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg="Error al guardar el producto"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msg="El producto se guardo correctamente"
        res.json(response)
    })

}
exports.find=function(req,res){
    Producto.find(function(err,productos){
        res.json(productos)
    })
}
exports.findOne=function(req,res){
    Producto.findOne({_id:req.params.id},function(err,producto){
        res.json(producto)
    })

}
exports.update=function(req,res){
    let producto={
        codigo_producto:req.body.codigo_producto,
        nombre_producto:req.body.nombre_producto,
        marca:req.body.marca,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
    }
    Producto.findByIdAndUpdate(req.params.id,{$set:producto},function(err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg="Error al guardar el producto"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msg="el producto se modifico correctamente"
        res.json(response)
    })

}
exports.remove=function(req,res){

    Producto.findByIdAndRemove({_id:req.params.id},function(err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg="Error al borrar el producto"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msg="el producto se eleimino correctamente"
        res.json(response)
    })

}
