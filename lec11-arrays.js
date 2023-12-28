//Basics
let empty = [];
let numbers = [1, 2, 3, 4, 6, null, false, "Tias"];
console.log(JSON.stringify(numbers));
console.log(numbers[numbers.length - 1]);
// expected output:
// [1,2,3,4,6,null,false,"Tias"]
// Tias


let str = numbers.toString();
console.log(str, "   Type:", typeof (str));
//expected output : 1,2,3,4,6,,false,Tias    Type: string


let str2 = numbers.join("->");
console.log(str2, "   Type:", typeof (str2))
//expected output: 1->2->3->4->6->->false->Tias    Type: string


//removes last
numbers.pop();
console.log(JSON.stringify(numbers));
//expected output: [1,2,3,4,6,null,false]


//adds last
numbers.push("Tasriad");
console.log(numbers);
//expected output: [ 1, 2, 3, 4, 6, null, false, 'Tasriad' ]


//removes first
numbers.shift();
console.log(numbers);
//expected output: [ 2, 3, 4, 6, null, false, 'Tasriad' ]


//adds first
numbers.unshift(0);
console.log(numbers);
//expected output: [ 0, 2, 3, 4, 6, null, false, 'Tasriad' ]


let nums = [1, 2, 3, 4, 5];
console.log(nums, " length of the array: ", nums.length);
//expected output [ 1, 2, 3, 4, 5 ]  length of the array:  5


delete (nums[0]);
console.log(nums, " length of the array: ", nums.length);
//expected output [ <1 empty item>, 2, 3, 4, 5 ]  length of the array:  5


let nums2 = [6, 7, 8, 9];
let nums3 = nums.concat(nums2);
console.log(nums3);
//expected output [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]


let nums4 = [34, 56, 32, 1, 9, 23, 58, 97.34];
// JSON.stringify is used for good formatting.It converts the array into string representation
console.log(JSON.stringify(nums4));
//expected output [34,56,32,1,9,23,58,97.34]

//sorts in alphabetical manner.Interprets as strings not as numbers.
nums4.sort();
console.log(JSON.stringify(nums4));
//expected output [1,23,32,34,56,58,9,97.34]

//comparator
let compare = (a, b) => {
    return a - b; //ascendig order, b-a for descending order.
}
nums4.sort(compare);
console.log(JSON.stringify(nums4));
//expected output [1,23,32,34,56,58,9,97.34]

nums4.reverse();
console.log(JSON.stringify(nums4));
//expected output [1,9,23,32,34,56,58,97.34]

valuesRemoved = nums4.splice(3, 3, 101, 102, 103);
console.log(JSON.stringify(nums4));
//expected output [97.34,58,56,101,102,103,9,1]

console.log(valuesRemoved);
//expected output [34,32,23]

console.log(nums4.slice(1, 4));
//expected output [ 58, 56, 101 ]

//Create array
let Name = "tasriad";
let ara = Array.from(Name);
console.log(JSON.stringify(ara));
//expected output ["t","a","s","r","i","a","d"]

//Array map method
//for each loop and map works the same just that for each works on original array and map works on new array.Both have three parameters.
let ara2 = [1, 2, 3, 4, 5, 6, 7, 8];
let ara3 = ara2.map((value, index, array) => {
    console.log(index, "->", value, "->", JSON.stringify(array));
    //expected output:
    // 0 -> 1 -> [1, 2, 3, 4, 5, 6, 7, 8]
    // 1 -> 2 -> [1, 2, 3, 4, 5, 6, 7, 8]
    // 2 -> 3 -> [1, 2, 3, 4, 5, 6, 7, 8]
    // 3 -> 4 -> [1, 2, 3, 4, 5, 6, 7, 8]
    // 4 -> 5 -> [1, 2, 3, 4, 5, 6, 7, 8]
    // 5 -> 6 -> [1, 2, 3, 4, 5, 6, 7, 8]
    // 6 -> 7 -> [1, 2, 3, 4, 5, 6, 7, 8]
    // 7 -> 8 -> [1, 2, 3, 4, 5, 6, 7, 8]
    return value + 1;
})
console.log(JSON.stringify(ara3));
//expected output : [2,3,4,5,6,7,8,9]

//Array filter method
let ara4 = ara2.filter((value)=>{
    return value<5;
})
console.log(ara4);
//expected output : [ 1, 2, 3, 4 ]

//Array reduce method
let ara5 = [1,2,3,4,5];
const product = (n1,n2) =>{
    return n1*n2;
}
let fact = ara5.reduce(product); 
// 1*2=2
// 2*3=6
// 6*4=24
// 24*5=120
console.log(fact);
//expected output: 120
