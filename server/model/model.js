// model pre našu datbázu, udaje a typy ktore tam budeme ukladať

// importneme si databázu
const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
})

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;