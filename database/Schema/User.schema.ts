import  {Schema,model}  from "mongoose";

const User =  new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    contact:{
        email:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:false,
        }
    }
})


export const UserSchema = model("users", User)