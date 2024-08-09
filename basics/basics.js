// part 1

const array = ["a","b","c"];


const newarray=[...array,"d"];
console.log(newarray);



// function

const fun=()=>{
    console.log("nodejs");
}
fun();



//  set intreval

// setInterval(()=>{
//     console.log("running")
// },2000);


// set time out
// setTimeout(()=>{
//     console.log("reactjs");
// },2000);



// set interval


 const interval = setInterval(()=>{
    console.log("this is node js");
},1000);

setTimeout(()=>{
    clearInterval(interval);
},3000);
