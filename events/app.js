const EventEmitter=require('events');

const emitter=new EventEmitter();

emitter.on("greet",()=>{
    console.log("shubham");
});

emitter.emit("greet")

