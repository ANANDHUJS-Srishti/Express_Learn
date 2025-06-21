// const fs = require('fs');

//Reading a txt file

// fs.readFile('example.txt', (error, data) => {
//     if (error) {
//         console.log("error", error);
//         return;
//     }
//     console.log("Contents", data.toString());

// })


//Writing 

// fs.writeFile('FS/example.txt',"Hello Node",(err)=>{
//     if(err){
//         console.log("Error",err)
//         return;
//     }
//     console.log("File Written Successfully")
// })

//Appending

// fs.appendFile('example.txt',"\nHello World",(err)=>{
//     if(err){
//         console.log("Error",err)
//     }
//     console.log("File Appended Successfully")
// })

//Deleting

// fs.unlink('example.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("File Deleted")
// })