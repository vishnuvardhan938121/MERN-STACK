// file system example 
/*const fs=require('fs');
fs.readFile("demo.txt",'utf8',(err,data)=>
{
    if(err)
        {
            console.log(err);
        }
        else{
            console.log(data);
        }
}) 

fs.writeFile("example.html",'utf8',(err)=>
{   
    if(err) {
    console.log(err);
    } 
    else{
        console.log("file created succesfully");
    } 



}) */     
// dynamically writing content

const fs=require('fs');
const content=" hello my name is vishnu"; 
fs.writeFile("example.html",content,(err)=>
{   
    if(err)
        {
            console.log(err);
        } 
        else{
            console.log("data written succesfully");
        }

})