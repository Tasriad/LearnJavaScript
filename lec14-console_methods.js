console.log("Hey bro!");
// disntinguished error message
console.error("This is an error");
// disntinguished warning message
console.warn("This is a warning message.");
// if false then error.
console.assert(1 > 2); //assertion failed
console.assert(3 > 2);

let obj = { a: 1, b: 2, c: 3 };
console.table(obj);

console.time("a");
console.timeEnd("a");
// comparing time of for and while loop
console.time("forLoop");
for (i = 0; i < 10; i++) {
    console.log(i);
}
console.timeEnd("forLoop");
console.time("whileLoop");
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}
console.timeEnd("whileLoop");