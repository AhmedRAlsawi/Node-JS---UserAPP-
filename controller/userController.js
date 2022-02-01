const User = require("../models/user")
module.exports={
    all(req, res, next){
        const limit = parseInt(req.query.limit) || "";

        User.find({}).limit(limit).then((users)=>{
            res.status(200).send(user)
        }).catch(next)
    },
    create(req, res, next){
        const userDetails = req.body;
        User.create(userDetails).then(user =>{
            res.status(201).send(user)
        }).catch(next)
    },
    details (req, res, next){
        const userId = req.params.id;
        User.findById({
            _id : userId
        }).then(user=>{
            res.status(200).send(user)
        }).catch(next)
    },
    update (req, res, next)
    {
        const userId = req.params.id;
        const userDetails = req.body;
        User.findByIdAndUpdate({
            _id : userId
        }, userDetails).then(()=>{
            User.findById({
            _id : userId
        })
        .then(user => {res.status(200).send(user)})
        .catch(next)
        })
    },
    delete (req, res, next)
    {
        const userId = req.params.id;
        User.findByIdAndDelete({
            _id : userId
        })
        .then(user => {res.status(204).send(user)})
        .catch(next)
    }
}