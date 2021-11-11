const express = require('express')
const route = express.Router()
const UserController = require('../controller/UserController')

route.get('/',(req,res)=>{
    res.render('index')
})

route.get('/add-user',(req,res)=>{
    res.render('add-user')
})

route.post('/api/user',UserController.create);
route.get('/api/user',UserController.find);
route.put('/api/user/:id',UserController.update);
route.post('/api/user/:id',UserController.delete);

module.exports = route