// ex1
let sentence = "The brown fox jumps over the black dog.";
let word = "cow";
console.log(`The word ${word} ${sentence.includes(word) ? "is" : "isn't"} in the sentence.`);

//ex2
function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"

//ex3
const age = 26;
const beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // "Beer"

//ex4
// handling null values.
const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
};

console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
console.log(greeting(null)); // "Howdy, stranger"

// These two examples are equivalent.
function example() {
    if (condition1) {
        return value1;
    } else if (condition2) {
        return value2;
    } else if (condition3) {
        return value3;
    } else {
        return value4;
    }
}
function example() {
    return condition1 ? value1
        : condition2 ? value2
            : condition3 ? value3
                : value4;
}



