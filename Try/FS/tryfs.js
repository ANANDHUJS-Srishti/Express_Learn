const fs = require("fs")

fs.writeFile("New.txt","Heyy",(err)=>{
    if(err){
        console.log(err)
    }
})