const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script)
        script.onload = () => {
            resolve("SCript loaded.");
        }
        script.onerror = () => {
            reject(0);
        }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value);
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.esm.min.js");
}).then((value)=>{
    console.log("Second script ready!");
    console.log(value);
}).catch((error) => {
    console.log("We are having problems loading the script.");
})