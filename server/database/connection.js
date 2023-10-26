
const mongoose = require("mongoose");
const connectDB = async() => {
    try {
        const con = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("Databaza je pripojená správne, super David!")
    }catch(err){
        console.log(err);  //
        process.exit(1);
    }
}

module.exports = connectDB