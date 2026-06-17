const EventEmitter=require('events');

const  emitter=new EventEmitter();

const eventCounts={
    "user-login":0,
    "user-logout":0,
    "user-purchase":0,
    "profile-update":0
}

emitter.on("user-login",(username)=>{
    console.log(`${username} logged in`);   
})

emitter.on("user-login",(username,item)=>{
    console.log(`${username} purchased ${item}`);   
})
emitter.on("user-login",(username,feild)=>{
    console.log(`${username} updated their ${feild}`);   
})

emitter.on("user-login",(username)=>{
    console.log(`${username} log-out`);   
})


emitter.emit("user-login","shubham");
emitter.emit("user-purchase","shubham","Mobile");
emitter.emit("profile-update","shubham","email")
emitter.emit("user-logout","shubham",)