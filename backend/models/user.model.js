import mongoose from  "mongoose"

const userSchema=new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true 
        },
        email:{
            type:String,
            lowercase:true,
            required:true,
            unique:true,
            trim:true
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        refreshToken: {
            type: String,
          },

    },{
        timestamps:true,
    }
)

export const User=mongoose.model("User",userSchema);