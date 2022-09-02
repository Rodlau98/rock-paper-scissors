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

//This function takes the player and the computer selections and plays a round of rock, paper, scissors.
function playRound(playerSelection, computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    let firstUpperC = c.charAt(0).toUpperCase() + c.slice(1);
    let firstUpperP = p.charAt(0).toUpperCase() + p.slice(1);
    
    console.log("You chose: " + firstUpperP);
    console.log("The computer chose: " + firstUpperC);

    if (p !== "rock" && p !== "paper" && p !== "scissors"){
        console.log(`${p} is not a valid entry!`);
        return 0;
    } else
    if (p === c) {
        console.log("We have a tie!");
        return 1;
    } else if (p === "rock" && c === "paper" || p === "scissors" && c === "rock" || p === "paper" && c === "scissors"){
        console.log("You lose! " + firstUpperC + " beats " + firstUpperP + ". Better luck next time!");
        return 2;
    } else {
        console.log("You win! " + firstUpperP + " beats " + firstUpperC + ". Good job!");
        return 3;
    }
    
}

//This functions plays the game 5 times and then displays the results at the end
function game(){
    let playerWin = 0;
    let computerWin = 0;
    let tie = 0;
    let error = 0;
    let result;

    for (let i = 0; i < 5; i++) {
        result = playRound(prompt("Choose Rock, Paper or Scissors"), getComputerChoice());
        if (result === 0) {
            error++;
        } else if(result === 1){
            tie++;
        } else if (result === 2){
            computerWin++;
        } else if (result === 3){
            playerWin++;
        } 
    }
    
    console.log(`There were a total of ${playerWin} wins, ${computerWin} losses and ${tie} ties.`);
    
    if(error > 0){
        console.log(`Ups! There were ${error} misspelling(s). We are not counting those.`);
    }
    
    if(playerWin > computerWin){
        console.log("Congratulations! You won!");
    } else if (playerWin < computerWin){
        console.log("Too bad, it seems like you lost...");
    } else {
        console.log("It's a tie!");
    }  
}

game();
