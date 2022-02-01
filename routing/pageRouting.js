module.exports = (app)=>{
    app.get("/",(req,res)=>{
        res.send("This is app main page")
    })
}