// Basic syntax
// let promise = new Promise(function(resolve,reject){
//     console.log("hello");
//     resolve(86);
// })
// console.log("hello2");
// setTimeout(function(){
//     console.log("hello3");
// },2000)
// console.log("hello4");
// console.log(promise);

let p1 =  new Promise((resolve,reject)=>{
    console.log("Promise is pending.");
    setTimeout(()=>{
        console.log("I am a promise.I am resolved.");
        resolve(true);
    },5000)
})
let p2 =  new Promise((resolve,reject)=>{
    console.log("Promise is pending.");
    setTimeout(()=>{
        console.log("I am a promise.I am rejected.");
        reject(new Error("I am an error!"));
    },5000)
})
// console.log(p1);
// console.log(p2);

p1.then((value)=>{
    console.log(value);
});
p2.catch((error)=>{
    console.log("some error occured in p2.");
})

