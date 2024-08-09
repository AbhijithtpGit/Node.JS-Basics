
// events

const eventemitter = require("events");

const emitter = new eventemitter();
emitter.on("message",(data)=>{
    console.log(data.Text);
})

emitter.emit("message",{Text:"user logged"})