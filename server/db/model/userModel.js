const mongoose=require('mongoose');
let Schema=mongoose.Schema;

let userSchema=new Schema({
	userId:{type:String,required:true},
	userName:{type:String,required:true},
	passWd:{type:String,required:true}
})

let usermodel=mongoose.model('user',userSchema);
module.exports=usermodel;
