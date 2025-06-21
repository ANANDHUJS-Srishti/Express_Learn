//NodeJS

// const arr = [1,2,3,4,5]
// arr.forEach((items,index)=>{console.log(items,index)})


// const arr =[1,2,3,4]
// let newArray = [...arr ,5]
// console.log(newArray);


// setInterval(()=>{
//     console.log("Hello");
// },3000)




// let interval = setInterval(()=>{
//     console.log("Hello");
// },3000)
// setTimeout(()=>{
//     clearInterval(interval)
//     console.log("cleared")
// },12000)


//in frontend we have "window"
//eg: window.console.log("hello")
//but for backend instead of "window" use "global"
//eg: global.console.log("hello")
//also try console.log(global)

// console.log(global)

//to check the filename we are at
// console.log(__filename)
// console.log(__dirname)

//import
// in react import is done like
// import "func" from "./"
// for node
// module aka package aka library
// require()
// if for path we use require("./")
// if for module we use require("pkg_name")


//path

//  const path = require("path")
//  console.log(path.basename(__filename));
//  console.log(path.extname(__filename));
//  console.log(path.dirname(__filename));
//  console.log(path.parse(__filename));
//  console.log(path.join(__dirname,"api","script.js"));  // helps combine two path



//fs module  
// aka file system 
// fs module stands for File System. It's a built-in core module used to work with files and directories on your computer — reading, writing, updating, deleting, and more..


 const path = require("path")
const fs = require("fs")
// console.log(fs)

//creating a folder called api

// fs.mkdir(path.join(__dirname, "/api"), {}, (err) => {
//     if (err) throw err;
// })

// creating another folder inside api

// fs.mkdir(path.join(__dirname,"/api/child"),{},(err)=>{
//     if(err) throw err;
// })

//creating a file inside the folder

// fs.mkdir(path.join(__dirname,"/api/child/index.html"),{},(err)=>{
//     if(err) throw err;
// })

// Delete entire folder

// fs.rmdir(path.join(__dirname,"/api/child/index.html"),{recursive:true},(err)=>{
//     if(err) throw err;
// })




