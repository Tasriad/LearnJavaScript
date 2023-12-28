// this function will run after 2s
let timed_alert = setTimeout(function(){
    alert('I am inside of setTimeout.');
}, 2000);

let des = prompt("Do you want an alert after 5s (y/n)");

if (des == 'n') {
    clearTimeout(timed_alert); // the function that was set to run by setTimeout will be cleared.
}

// second way syntax
function sum(a, b) {
    alert('yes, I am running. Sum is: ' + (a + b));
    return (a + b);
}

setTimeout(sum, 4000, 1, 2);

// the function will keep running after 5s interval
setInterval(function(){
    alert('peek a boo!');
},5000)
