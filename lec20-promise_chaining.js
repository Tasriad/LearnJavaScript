let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Resolved promise 1 after 2 seconds");
        resolve(1);
    },2000)
})

p1.then((value)=>{
    console.log(value);
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Resolved promise 2 after 2 seconds");
            resolve("message");
        },2000)
    })
    return p2;
}).then((value)=>{
    console.log("We are done.");
    console.log("Found: "+value);
})