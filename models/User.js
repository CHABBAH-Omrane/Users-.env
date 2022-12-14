const mongoose =require('mongoose');
const  Schema  = mongoose.Schema();


//Create a person model
const usersSchema={
    firstName:{
        type:String,
        required:true },
    lastName:{
        type:String,
        required:true },
    age:Number,
    address:{
        city:String,
        code:Number,
    }
};

const user =mongoose.model("user",usersSchema)
module.exports = user