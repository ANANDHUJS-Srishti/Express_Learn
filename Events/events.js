const EventEmitter = require("events");

// above is an class "EventEmitter" , so it requires an obj

const emitter = new EventEmitter();  // created an obj of above class


//emitter.on(...)
//tells the EventEmitter object (emitter) to listen for a specific event — in this case, "login".
//(data) => { ... }
//This is the callback function that runs when the login event is emitted.
//data is the object (or value) passed to the listener when emit("login", data) is called.

emitter.on("login",(data)=>{    //registers a listener (a function that should run when a specific event happens).
    // console.log(data) 
    console.log(data.name);
})

emitter.on("logout",(data)=>{ //registers a listener (a function that should run when a specific event happens).
    console.log(data.text);
})


emitter.emit("login",{text:"User LoggedIn", id:100, name:"Anandhu"})  //triggers the event — i.e., it calls all the registered listeners for that event.

emitter.emit("logout",{text:"User LoggedOut"}) //triggers the event — i.e., it calls all the registered listeners for that event.