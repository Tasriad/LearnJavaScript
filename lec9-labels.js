
//LABELED CONTINUE
// The first for statement is labeled "loop1"
// loop1: for (let i = 0; i < 3; i++) {
//     // The second for statement is labeled "loop2"
//     loop2: for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 1) {
//             continue loop1; // will skip for loop1
//         }
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// Logs:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2
console.log();

// The first for statement is labeled "loop1"
// loop1: for (let i = 0; i < 3; i++) {
//     // The second for statement is labeled "loop2"
//     loop2: for (let j = 0; j < 3; j++) {
//         if (i === 1 && j === 1) {
//             continue loop2; //will skip for loop2
//         }
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 1, j = 2
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2 


//LABELED BREAK.
let i, j;

// The first for statement is labeled "loop1"
loop1: for (i = 0; i < 3; i++) {
    // The second for statement is labeled "loop2"
    loop2: for (j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break loop1; //breaks loop1
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

// Logs:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0

console.log();

// The first for statement is labeled "loop1"
loop1: for (i = 0; i < 3; i++) {
    // The second for statement is labeled "loop2"
    loop2: for (j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break loop2; //breaks loop2
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

// Logs:
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0


foo: {
    console.log("face");
    break foo;
    console.log("this will not be executed");
}
console.log("swap");

  // Logs:
  // "face"
  // "swap"

