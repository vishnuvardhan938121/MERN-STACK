const  express=require('express'); 
const app =express(); 
const mongoose =require('mongoose');  
const product = require('./models/product_model');
const student = require('./models/student_model');
app.use(express.json());
app.post("/api/products", async(req,res)=>
{    try{
   const Product=  await product.create(req.body); 
   res.status(200).json(Product);
} 
    catch(error)
    {
       console.log(err);
    }
})  
app.post("/api/students", async(req,res) =>
{   try{
    const Student= await student.create(req.body);
    res.status(200).json(Student);
}
  catch(error) 
  {
    console.log(error.message);
  }
});
//routes    
 /*app.use( (req,res,next)=>
{  
     const first=1;
     if(2>1)
     {   console.log("running middleware1");
        next();
     } 
     
})
app.use( (req,res,next)=>
    {  
         const second=2;
         if(20>second)
         {
            next();
         } 
         console.log("running middleware2");
    })   */
app.get('/',(req,res ,next)=>
{
    res.send("hello this home page"); 
});  
app.get('/sales',(req,res,next)=>
{
   res.send(" this is sales page")
})   
mongoose.connect("mongodb+srv://username:yourpassword$@cluster0.f7o6r.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0").then(()=>
{   
    app.listen(1234,()=>
        {  
             console.log("server is running");
        })
    console.log("connected to database ");
   
}).catch((error)=>
{  console.log(error.message)
     console.log("connection failed ");
})

