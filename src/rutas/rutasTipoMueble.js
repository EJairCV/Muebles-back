const express = require("express");
const tipoMaterialModelo = require("../modelos/modeloTipoMaterial");
const routerTipoMueble= express.Router();

//creat tipo de material

routerTipoMueble.post("/crearTipoMaterial",(req,res)=>{
    const tipoMaterial = tipoMaterialModelo(req.body);
    tipoMaterial.save()
    .then(data=>res.json(data))
    .catch(error=>res.json({mensaje:error}));
});
//listar tipo material

routerTipoMueble.get("/listarTipoMaterial",(req,res)=>{
    tipoMaterialModelo.find()
    .then(data=>res.json(data))
    .catch(error=>res.json({mensaje:error}));
});

//eliminar

routerTipoMueble.delete("/eliminarTipoMaterial/:id",(req,res)=>{
    const {id}=req.params;
    tipoMaterialModelo.remove({_id:id})
    .then(data=>res.json(data))
    .catch(error=>res.json({mensaje:error}));
});

module.exports= routerTipoMueble;