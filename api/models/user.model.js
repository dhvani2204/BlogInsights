import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
username: {
    type:String,
    required:true,
    unique: true,
},
email:{
    type:String,
    required:true,
    unique: true,
},
password:{
    type:String,
    required:true,
    //not unique because many people use simple passwords like 1234, so 2 users can have the same password
},
},{timestamps:true}//need to store time of creation and update
);

const User=mongoose.model('User',userSchema);
export default User;