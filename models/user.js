const moongose = require("mongoose");

const Schema = moongose.Schema;

const UserSchema = new Schema ({
    firstName:
    {
        type:String,
    },
    lastName:
    {
        type:String,
        required:true,
    },
    mobileNumber:
    {
        type:Number,
        required:true
    },
    emailAddress:
    {
        type:String,
        required:true
    }
});

const User = moongose.model("user",UserSchema);

module.exports = User;