let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1");
    }, 5000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("value 2");
        reject(new Error("Error"));
    }, 1000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3");
    }, 3000);
});

// if any of the promises are reject this will not resolve
// let promiseAll = Promise.all([p1,p2,p3]);
// promiseAll.then((value)=>{
//     console.log(value);
// })

//even if some of the promises are rejects the others will run
// let promiseAllSettled = Promise.allSettled([p1,p2,p3]);
// promiseAllSettled.then((value)=>{
//     console.log(value);
// })

// whoever is the fastest.Throws error if the fastest is reject 
// let promiseRace = Promise.race([p1,p2,p3]);
// promiseRace.then((value)=>{
//     console.log(value);
// })

// similar to race but wont throw error just take the next fastest
// let promiseAny = Promise.any([p1,p2,p3]);
// promiseAny.then((value)=>{
//     console.log(value);
// })

// custom resolve and reject
// let cust_resolve = Promise.resolve(1);
// let cust_reject = Promise.reject(0);

