
// Strings are immutable.
let Name = "Tasriad";
Name[0] = 'N'; //Not possible
console.log(Name[0]);


boy1 = "Munim";
boy2 = "Tias";
// string interpolation. "" '' can be used freely inside strings made of backticks.Otherwise we have to use escape sequence.
let sentence  = `${boy1} is a 'friend' of ${boy2}.`
console.log(sentence);


// string methods
console.log(Name.length);  //gives length
console.log(Name.toUpperCase()); // to upper case
console.log(Name.slice(2,4)); // from index 2 to 4-1=3.
console.log(Name.replace("Tasr","R")); // replaces exp1 with exp2
let friend = "Romen";
console.log(Name.concat(" is a friend of ",friend," and ",boy1)); //concats

let friend2 = "          Iffat    ";
console.log(friend2);
console.log(friend2.trim());

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
