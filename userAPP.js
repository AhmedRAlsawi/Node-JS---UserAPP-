const express = require("express");

const pageRouting = require("./routing/pageRouting");
const userRouting = require ("./routing/userRouting")

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/userAPP",{
    useNewUrlParser : true,
    useUnifiedTopology:true
});

const app = express();

app.use(express.json());

pageRouting(app);
userRouting(app);

app.use((err,req,res,next)=>{
    res.status(422).send({error:err.message})
})

module.exports = app;