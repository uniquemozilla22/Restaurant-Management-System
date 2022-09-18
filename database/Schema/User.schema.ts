import  mongoose, { Schema }  from "mongoose";
export interface IUser{
    name: string;
    username: string;
    password: string;
    contact?: {
        email: string;
        phone?: number;
    };
}


const User =  Schema<IUser>({
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


export const UserSchema = mongoose.Model<IUser>("users", User)