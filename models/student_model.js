const mongoose=require('mongoose'); 
const studentschema=mongoose.Schema(
    {
        name:
        {
            type:String, 
            required:true
        }, 
        surname:
        {
            type:String, 
            required:true
        },
        phno:
        {
            type:Number, 
            required:true
        }, 
        university:
        {
            type:String, 
            required:true,
        }
    }
); 
const student=mongoose.model("student",studentschema); 
module.exports=student;