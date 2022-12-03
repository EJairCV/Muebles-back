const mongoose = require ("mongoose");

const tipoMuebleSchema=mongoose.Schema({
    nombre:{
        type: String,
        require: true
    }
});

module.exports =mongoose.model("tipoMuebleModelo", tipoMuebleSchema);