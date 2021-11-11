const mongoose = require('mongoose')

const connectDb = async() =>{
    try{
        const con = await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser:true
        })

        console.log('MongoDB Telah Terkoneksi : '+con.connection.host)
    } catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDb