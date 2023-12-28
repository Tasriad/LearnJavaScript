// Take input from user utill user inputs 0 and keep adding them into and array and return an with only even numbers then store the square of the those numbers in another array.

let arr1 = [];
let num;
do {
    num = prompt("Enter a number(Enter 0 to exit): ");
    arr1.push(num);
} while (num != 0)

let arr2 = arr1.filter((x)=>{
    return x%2==0;
})

let arr3 = arr2.map((a)=>{
    return a*a;
})
console.log(arr3);