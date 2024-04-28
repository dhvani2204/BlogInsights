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
profilePicture:{
    type:String,
    default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"     
},
isAdmin:{
    type:Boolean,
    default:false,
},
},{timestamps:true}//need to store time of creation and update
);

const User=mongoose.model('User',userSchema);
export default User;