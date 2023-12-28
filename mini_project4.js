// use array reduce function to calculate factiorial of a number.

let n = prompt("Enter a number.");
let arr = [];
while (n>0) {
    arr.push(n);
    n--;
}
let factiorial = arr.reduce((a1,a2)=>{
    return a1*a2;
})
console.log(factiorial);