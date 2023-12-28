//Standard way.
function power(x, y) {
    return x ** y;
}
console.log(power(2, 3));


// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// Arrow functions cannot use yield within their body and cannot be created as generator functions
//SYNTAX:
// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }

const max = (a, b) => {
    if (a > b)
        return a;
    else
        return b;
}
console.log(max(34, 57));


// Parameters are essentially passed to functions by value — so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, the change is not reflected globally or in the code which called that function.

// When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:

function myFunc(theObject) {
    theObject.make = "Toyota";
}

const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

// When you pass an array as a parameter, if the function changes any of the array's values, that change is visible outside the function, as shown in the following example:
function myFunc(theArr) {
    theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

// The following example defines an unnamed function and assigns it to x. The function returns the square of its argument:
const x = function (y) {
    return y * y;
};



// Function expressions are convenient when passing a function as an argument to another function. The following example shows a map function that should receive a function as first argument and an array as second argument
// In the following code, the function receives a function defined by a function expression and executes it for every element of the array received as a second argument
function map(f, a) {
    const result = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        result[i] = f(a[i]);
    }
    return result;
}

const cube = function (x) {
    return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]



// Default parameter
function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5)); // 5



// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10



//   A function definition's last parameter can be prefixed with ... (three U+002E FULL STOP characters), which will cause all remaining (user supplied) parameters to be placed within an Array object.  

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// Console Output:
// a, one
// b, two
// manyMoreArgs, ["three", "four", "five", "six"]



//   Since theArgs is an array, a count of its elements is given by the length property. If the function's only parameter is a rest parameter, restParams.length will be equal to arguments.length.
function fun1(...theArgs) {
    console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3

// In the next example, a rest parameter is used to collect all parameters after the first parameter into an array. Each one of the parameter values collected into the array is then multiplied by the first parameter, and the array is returned:
function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
}

const arr2 = multiply(2, 15, 25, 42);
console.log(arr2); // [30, 50, 84]







