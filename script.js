// Make global variables not global
// if you input something other than rock paper or scissors it defaults to 'else' and makes you instantly win. Want to fix this without having to add several permutations
// make loops when I learn them
// console.log(playRound) keeps spamming undefined in console
// Want to skip declaring 'computerSelection' as a variable and just use the function 'computerPlay()' as a parameter instead. don't know if possible


// Want to not have these global, !!fix later!!
let computerCounter = 0;
let userCounter = 0;

// Wraps everything to simulate 1 round
function game () {

// Computer randomly generates rock paper or scissors
function computerPlay() {
    const localvar = Math.floor(Math.random() * 3 + 1)
    if (localvar === 1) {
        return "Rock";
    } else if (localvar === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

const computerSelection = computerPlay();
const playerSelection = prompt("Type rock, paper, or scissors");

  
  // Simulates who wins given computer and user
  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        alert (`tied! ${playerSelection}` + " ties " +  `${computerSelection}`);
    } else if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") {
        alert (`You lost! ${computerSelection}` + " beats " +  `${playerSelection}`);
        ++computerCounter;
    } else {
        alert (`You won! ${playerSelection}` + " beats " +  `${computerSelection}`); 
        ++userCounter;
    }
 }
 // Calls 'playround()' so it tells you if you win/lose/tie
 console.log(playRound(playerSelection, computerSelection));
}



  // Calls the 'game()' function 5 times 
console.log(game());
console.log(game());
console.log(game());
console.log(game());
console.log(game());

  //tallies total results and tells who wins/loses overall.
if (computerCounter > userCounter) {
    alert ("You lost")
} else if (computerCounter < userCounter) {
    alert ("You win")
} else {
    alert ("You tied")
}













