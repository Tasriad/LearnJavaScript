// Generate a random number between 1 to 100, take input from user to guess the number. If user gets it wrong outputs greater or lesser.Program terminates if user guesses correct and outputs correct! and score = 100 - no of guesses.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInteger = getRandomInt(1, 100);
console.log(randomInteger); // Output: A random integer between 1 and 100 (inclusive)

let guess;
let score = 100;
do{
    guess = prompt("Enter a number between 1 to 100:");
    if(guess != randomInteger)
    {
        if(guess != -1)
        {
            if(randomInteger > guess)
            {
                alert("Guess Higher.");
            }
            else if(randomInteger < guess)
            {
                alert("Guess Lower.");
            }
            score -- ;
        }
    }
    else
    {
        alert("Correct!");
    }
}while(guess!=randomInteger && score >=0 && guess != -1)
if(guess==-1)
{
    alert("Abrupt quit.")
    score = 0;
}
// alert("Score is :",score);  // not gonna work. alert only take single string.
alert("Score is: " + score);
