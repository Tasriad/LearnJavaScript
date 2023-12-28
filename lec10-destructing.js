// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

// Similarly, you can destructure objects on the left-hand side of the assignment.
const obj = { a: 1, b: 2 };
const { c, d } = obj;
// is equivalent to:
// const c = obj.a;
// const d = obj.b;

// In an array destructuring from an array of length N specified on the right-hand side of the assignment, if the number of variables specified on the left-hand side of the assignment is greater than N, only the first N variables are assigned values. The values of the remaining variables will be undefined.

const foo = ["one", "two"];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); // undefined


// Two variables values can be swapped in one destructuring expression.
let e = 1;
let f = 3;

[e, f] = [f, e];
console.log(e); // 3
console.log(f); // 1

const arr = [1, 2, 3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1, 3, 2]


//Object destructuring
const user = {
    id: 42,
    isVerified: true,
};

const { id, isVerified } = user;

console.log(id); // 42
console.log(isVerified); // true


