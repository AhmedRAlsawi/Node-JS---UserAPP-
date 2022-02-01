const userController = require("../controller/userController");

module.exports = function (app)
{
    app.get("/api/user",userController.all);
    
    app.get("/api/user/:id",userController.details);
    
    app.put("/api/user/:id",userController.update);
    
    app.delete("/api/user/:id",userController.delete);

    app.post("/api/user",userController.create)
}