const mongoose = require ("mongoose");

const tipoModeloSchema=mongoose.Schema({
    nombre:{
        type: String,
        require: true
    }
});

module.exports =mongoose.model("tipoModeloMueble", tipoModeloSchema);