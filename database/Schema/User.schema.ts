import mongoose  from "mongoose";

export interface IUser{
    name: string;
    username: string;
    password: string;
    contact?: {
        email: string;
        phone?: number;
    };
}

const User = new mongoose.Schema<IUser>({
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


const UserSchema = mongoose.model<IUser>("users", User)

export default UserSchema