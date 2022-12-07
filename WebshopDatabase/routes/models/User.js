const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username:{type: String, required: true, unique:true}, 
        email:{type: String, required:true, unique:true}, 
        password:{type:String, required:true},
        isAdmin:{ 
            type: Boolean,
            default: false, //when we create any user he's not going to be Admin
        },

  
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
