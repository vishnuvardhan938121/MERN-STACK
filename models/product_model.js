const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
      name:
      {
        type:String,
        required:[true," please enter a product name"]
      },
      quantity:
      {
        type:Number, 
        required: true , 
        default:0
      }, 
      price:
      {
        type:Number, 
        required: true , 
        default:0
      },
      image:
      {
        type:String, 
        required: false, 
      }    
}); 
const product=mongoose.model("product",productSchema); 
module.exports=product;