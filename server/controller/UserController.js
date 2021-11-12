var userDb = require('../model/model')


exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({message:"Data Tidak Bisa Kosong"})
        return
    }

    const user = new userDb({
        nama        : req.body.nama,
        username    : req.body.username,
        role        : req.body.role,
        status      : req.body.status
    })

    user 
        .save(user)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "Error Ketika Masukan Data Ke Database"
            })
        })
}

exports.find = (req,res) => {
    userDb.find()
        .then(user=>
            {
                res.send(user)
            })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Ketika Melihat Data"})
        })
}

exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data Tidak Boleh Kosong!!!"})
    }

    const id = req.params.id
    userDb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data=>{
            if(!data){
                res.status(400).send({message: 'User Tidak Ditemukan'})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Ketika Update Data"})
        })
}

exports.delete = (req,res) => {
    const id = req.params.id

    userDb.findByIdAndDelete(id)
        .then(data=>{
            if(!data)
            {
                res.status(400).send({message: 'User Tidak Ditemukan'})
            }
            else {
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:err.message || "Error Ketika Delete Data"})
        })
}