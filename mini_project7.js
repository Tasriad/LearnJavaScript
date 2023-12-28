// Create a rock(R),paper(P),scissor(S) game.

alert("Starting rock,paper,scissor");
let totalRound = parseInt(prompt("How many rounds:"));
let round = 1;
scoreP = 0;
scoreC = 0;
let winner;
function computerMove() {
    const choices = ["R", "P", "S"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
while (round <= totalRound) {
    let moveP = prompt("Enter R,P or S");
    let moveC = computerMove();
    let turnResult;
    if (moveP == moveC) {
        turnResult = "Tie";
    }
    else {
        if (moveP == "R" && moveC == "P") {
            scoreC++;
            turnResult = "Computer wins this round."
        }
        else if (moveP == "R" && moveC == "S") {
            scoreP++;
            turnResult = "Player wins this round."
        }
        else if (moveP == "P" && moveC == "S") {
            scoreC++;
            turnResult = "Computer wins this round."
        }
        else if (moveP == "P" && moveC == "R") {
            scoreP++;
            turnResult = "Player wins this round."
        }
        else if (moveP == "S" && moveC == "R") {
            scoreC++;
            turnResult = "Computer wins this round."
        }
        else if (moveP == "S" && moveC == "P") {
            scoreP++;
            turnResult = "Player wins this round."
        }
    }
    alert("You have thrown " + moveP + " and computer has thrown " + moveC + ". So the result of this round : " + turnResult);
    round++;
}
if (scoreP > scoreC) {
    winner = "Player";
}
else {
    winner = "Computer";
}
alert("Game over!");
alert("The final winner is " + winner + " by score :" + scoreP + "/" + scoreC);

