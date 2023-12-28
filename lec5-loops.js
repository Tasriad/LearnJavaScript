// In JavaScript, the console.log() function automatically adds a new line after each output. 
// standard for loop
console.log("By standard for loop");
for (let i = 0; i < 10; i++) {
    console.log(i);
}



// for in loop
console.log("By for in loop");
let marks = {
    'Tias': 100,
    'Toki': 90,
    'Munim': 90,
    'Rudro': 56,
    'Tabib': 98
}

for (let name in marks) {
    console.log('Marks of ' + name + ' is ' + marks[name]);
}

// By standard for loop

// for(let i=0;i<Object.keys(marks).length;i++)
// {
//     console.log('Marks of '+Object.keys(marks)[i]+' is '+marks[Object.keys(marks)[i]])
// }


// The for...of and for...in statements can also be used with destructuring. For example, you can simultaneously loop over the keys and values of an object using Object.entries().
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
    console.log(key, val);
}
// "foo" 1
// "bar" 2



// for of loop
// The for...of statement creates a loop Iterating over iterable objects (including Array, Map, Set, arguments object and so on), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
console.log("By for of loop");
for (let c of "Tasriad") {
    console.log(c);
}



// The following example shows the difference between a for...of loop and a for...in loop. While for...in iterates over property names, for...of iterates over property values:
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
    console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr) {
    console.log(i);
}
// Logs: 3 5 7



//while loop
console.log("By while loop");
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}



// do while loop
console.log("By do while loop");
i = 0;
do {
    console.log(i);
    i++;
} while (i < 10)

//for each loop
console.log("By for each loop");
let ara = [1, 2, 3, 4, "Tias", "Monica", 87, 4, true, "Jenny"];
ara.forEach((element) => {
    console.log(element);
})
