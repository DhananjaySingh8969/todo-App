const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    }, 
    date:{
        type:Date,
        required:true
    }
    
});
//setting name of collection as 'Contact' and apply contactSchema to it
const task=mongoose.model('tasks',taskSchema);
module.exports=task;