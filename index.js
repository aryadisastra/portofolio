const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bp = require('body-parser')
const path = require('path')
const app = express()
const connectDb = require('./server/database/connection')

const PORT = process.env.PORT || 8080
dotenv.config({path:'config.env'});
connectDb()


app.use(morgan('tiny'))
app.use(bp.urlencoded({extended:true}))
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/',require('./server/routes/router'))

app.set("view engine","ejs")

app.listen(PORT, ()=>(console.log('Server Sedang Berjalan Di Port : '+PORT)))
