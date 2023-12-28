// synchronous programming 
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favourite color?");
// console.log("Your name is "+a+".Your age is "+b+".Your favourite color is "+c+".");

// Asynchronous programming
// console.log("Start");
// setTimeout(function(){
//     console.log("Hey i am running after 3 seconds.");
// },3000)
// console.log("End");

//Callbacks
function loadScript(src,callback){
    let script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with SRC:"+src);
        callback(null);
    }
    script.onerror = function(){
        console.log("Error loading with src: "+ src);
        callback(new Error("Src got some error!"));
    }
    document.body.appendChild(script);
}
function alerting(error){
    if(error){
        console.log(error);
        return;
    }
    alert("Alerting");
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js",alerting);