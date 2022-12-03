const express = require("express");
const MuebleModelo = require ("../modelos/modeloMueble")

const router = express.Router()

// crear mueble

router.post("/crearMueble", (req, res)=>{
    const mueble = MuebleModelo(req.body);
    mueble.save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({mensaje: error}));
});

//listar usuarios
router.get("/listarMueble",(req,res)=>{
    
    MuebleModelo.find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({mensaje: error}));
});

//buscar usuarios
router.get("/listarMueble/:id",(req,res)=>{
    const {id} =req.params;
    MuebleModelo.findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({mensaje: error}));
});
//actualizar
router.post("/actualizarMueble/:id",(req,res)=>{
    const {id} =req.params;
    const {nombre,precioUnidad,precioMayor, tipoMaterial, tipoMueble,descripcion} =req.body;
    MuebleModelo
    .updateOne({_id:id},{ $set :{nombre, precioUnidad, precioMayor, tipoMaterial, tipoMueble, descripcion}})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({mensaje: error}));
});

//eliminar

router.delete("/eliminarMueble/:id",(req,res)=>{
    const {id} =req.params;
    MuebleModelo
    .remove({_id:id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({mensaje: error}));
});



module.exports = router;
