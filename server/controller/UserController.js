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

}

exports.update = (req,res) => {

}

exports.delete = (req,res) => {

}