//This function returns a random string between "Rock", "Paper" and "Scissors"
function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "Rock";
    } else if (choice === 1){
        return "Paper";
    } else if (choice === 2) {
        return "Scissors";
    }
}

const playerChoice = prompt("Choose Rock, Paper or Scissors");
//This function takes the player and the computer selections and plays a round of rock, paper, scissors.
function playRound(playerSelection, computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    let firstUpperC = c.charAt(0).toUpperCase() + c.slice(1);
    let firstUpperP = p.charAt(0).toUpperCase() + p.slice(1);
    
    console.log("You chose: " + firstUpperP);
    console.log("The computer chose: " + firstUpperC);

    if (p !== "rock" && p !== "paper" && p !== "scissors"){
        return `${p} is not a valid entry! Please refresh and try again.`
    } else
    if (p === c) {
        return "We have a tie!";
    } else if (p === "rock" && c === "paper" || p === "scissors" && c === "rock" || p === "paper" && c === "scissors"){
        return "You lose! " + firstUpperC + " beats " + firstUpperP + ". Better luck next time!";
    } else {
        return "You win! " + firstUpperP + " beats " + firstUpperC + ". Good job!";
    }
    
}

console.log(playRound(playerChoice, getComputerChoice()));