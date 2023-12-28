// Map
let arr = [1, 2, 3, 4, 5];
// performs some some operations on the origianl array and returns a new array.
let newArr = arr.map((value, index, array) => {
    console.log(value, index, array);
    // 1 0[1, 2, 3, 4, 5]
    // 2 1[1, 2, 3, 4, 5]
    // 3 2[1, 2, 3, 4, 5]
    // 4 3[1, 2, 3, 4, 5]
    // 5 4[1, 2, 3, 4, 5]
    return value + 1;

})
console.log(newArr); //[ 2, 3, 4, 5, 6 ]
console.log(arr); //[ 1, 2, 3, 4, 5 ]

// Filter
let arr2 = [34,23,67,45,12,89,43,23,56,87];
let newArr2 = arr2.filter((a)=>{
    return a>50;
})
console.log(newArr2); //[ 67, 89, 56, 87 ]


// Reduce
let arr3 = [1,2,3,4,5,6,7,8,9,10];
let newArr3 = arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(newArr3); //55 = 1+2 = 3 -> 3+3 = 6 -> 6+4  = 10 ..........