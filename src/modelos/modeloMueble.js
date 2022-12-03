const mongoose = require ("mongoose");

const muebleSchema=mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
    precioUnidad:{
        type: Number,
        require: true
    },
    precioMayor:{
        type: Number,
        require: true
    },
    descripcion:{
        type: String,
        require: true
    },
    tipoMaterial:{
        type: Array,
        require: true
    },
    tipoMueble:{
        type: Array,
        require: true
    }
});

module.exports =mongoose.model("MuebleModelo", muebleSchema);