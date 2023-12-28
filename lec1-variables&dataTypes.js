// There are 7 primitive data types : NNSSBBU
// 1.null
// 2.Number
// 3.string
// 4.boolean
// 5.BigInt
// 6.undefined
let name = "Tias";
let age = 23;
let isMarried = false;
let superPower = null;
let potential;
let powerLevel = BigInt(574);
let sign = Symbol("#");

console.log(name, typeof (name));
console.log(age, typeof (age));
console.log(isMarried, typeof (isMarried));
console.log(superPower, typeof (superPower));
console.log(potential, typeof (potential));
console.log(powerLevel, typeof (powerLevel));
console.log(sign, typeof (sign));

console.log('let is block scoped');
let a = 7
{
    let a = 4
    console.log(a);
}
console.log(a);
console.log("var isn't block scoped");
var b = 7
{
    var b = 4
    console.log(b);
}
console.log(b);

const author = "Tias"; //This cannot be changed.

//Non primitive data types
//Objects
const student = {
    name: "Tias",
    roll: 1,
    id: 1,
    isKing: true
}
console.log(student["roll"],typeof(student));
console.log(student.name);
student.name = "Tiana"; //can be changed.
console.log(student.name); 
