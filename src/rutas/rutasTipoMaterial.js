const express = require("express");
const tipoMuebleModelo = require("../modelos/modeloTipoMueble");
const routerTipoMueble = express.Router();

//crear tipo mueble

routerTipoMueble.post("/crearTipoMueble", (req,res)=>{
    const tipoMueble = tipoMuebleModelo(req.body);
    tipoMueble.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({mensaje:error}));
});
//listar tipo mueble

routerTipoMueble.get("/listarTipoMueble",(req,res)=>{
    tipoMuebleModelo.find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({mensaje:error}));
});

// eliminar

routerTipoMueble.delete("/eliminarTipoMueble/:id",(req,res)=>{
    const {id}= req.params;
    tipoMuebleModelo.remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({mensaje:error}));
});

module.exports= routerTipoMueble;
