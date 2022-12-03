const express = require("express");
const mongoose = require ("mongoose");
require("dotenv").config();
const mueblesRutas = require ("./rutas/rutasMuebles");
const tipoMuebleRuta = require("./rutas/rutasTipoMueble");
const tipoMaterialRuta =require("./rutas/rutasTipoMaterial");

const app = express();
const port = process.env.PORT || 9000;

//<---middleware-->
//solucion de error access control allow origin
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
app.use(express.json());
app.use("/api", mueblesRutas);
//probar si funciona
app.use("/api",tipoMaterialRuta);
app.use("/api",tipoMuebleRuta);
//routes
app.get("/", (req,res)=>{
    res.send("bienvenido a la API");
});


//coneccion con mongo

mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("conectado a mongo"))
.catch((error)=>console.error(error));


app.listen (port, ()=> console.log("server escuchando en",port ));

