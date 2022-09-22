
const container = document.querySelector(".dom");
const cards = document.querySelector(".cards");
const player = document.querySelector(".player");
const pc = document.querySelector(".pc");
const buttons = document.querySelectorAll(".select");
const score = document.createElement("h2");
const paragraph = document.createElement("p");
const playerChoice = document.createElement("p");
const computerChoice = document.createElement("p");
const final = document.createElement("h2");
const leftHand = document.createElement("img");
const rightHand = document.createElement("img");

const retry = document.createElement("button");
const link = document.createElement("a");
link.setAttribute("href", "./index.html");
link.textContent = "Try Again";
retry.appendChild(link);
retry.classList.add("retry");

container.appendChild(final);
player.appendChild(playerChoice);
pc.appendChild(computerChoice);
container.appendChild(paragraph);
container.appendChild(score);
player.appendChild(leftHand);
pc.appendChild(rightHand);

const ps = document.querySelectorAll("p");
let result;
let currentComputerChoice;
let playerWin = 0;
let computerWin = 0;
let tie = 0;
let aux = 0;





buttons.forEach((button) => {
    button.addEventListener("click", () => {
        ps.forEach((par) => {
            par.classList.add("fade");
            par.addEventListener("animationend", function () {
                par.classList.remove("fade");
            })
        });
        result = playRound(button.id, currentComputerChoice = getComputerChoice());
        if (result === 1) {
            tie++;
        } else if (result === 2) {
            computerWin++;
        } else if (result === 3) {
            playerWin++;
        }
        score.textContent = `Score: \n Player: ${playerWin} win(s). Computer: ${computerWin} win(s). Ties: ${tie}.`;
        //Setting the player's choice gif
        if (button.id === "rock") {
            leftHand.setAttribute("src", "./images/rock-left.gif");
            leftHand.setAttribute("alt", "choice")
        } else if (button.id === "paper") {
            leftHand.setAttribute("src", "./images/paper-left.gif");
            leftHand.setAttribute("alt", "choice")
        } else if (button.id === "scissors") {
            leftHand.setAttribute("src", "./images/scissors-left.gif");
            leftHand.setAttribute("alt", "choice")
        }

        //Setting the computer's choice gif
        if (currentComputerChoice === "rock") {
            rightHand.setAttribute("src", "./images/rock-right.gif");
            rightHand.setAttribute("alt", "choice")
        } else if (currentComputerChoice === "paper") {
            rightHand.setAttribute("src", "./images/paper-right.gif");
            rightHand.setAttribute("alt", "choice")
        } else if (currentComputerChoice === "scissors") {
            rightHand.setAttribute("src", "./images/scissors-right.gif");
            rightHand.setAttribute("alt", "choice")
        }
        //Disabling buttons for 1.5 seconds
        if (computerWin < 5 && playerWin < 5) {
            buttons.forEach(bot => {
                bot.disabled = true;
                setTimeout(() => {
                    bot.disabled = false;

                }, 1500)
            });
        }
    });
});


//This function returns a random string between "Rock", "Paper" and "Scissors"
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}

//This function takes the player and the computer selections and plays a round of rock, paper, scissors.
function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase();
    let c = computerSelection;
    let firstUpperC = c.charAt(0).toUpperCase() + c.slice(1);
    let firstUpperP = p.charAt(0).toUpperCase() + p.slice(1);
    playerChoice.textContent = "You chose: " + firstUpperP;
    computerChoice.textContent = "The computer chose: " + firstUpperC;
    if (computerWin === 4 && aux === 0) {
        final.textContent = "You lost the match!!!!!!!!!!";
        final.setAttribute("style", "color:red;");
        computerWin++;
        aux++;
        buttons.forEach((button) => { button.disabled = true });
        container.appendChild(retry);
        return;
    } else if (playerWin === 4 && aux === 0) {
        final.textContent = "You won the match!!!!!!!!!!!!!";
        final.setAttribute("style", "color:green;");
        playerWin++;
        aux++;
        buttons.forEach((button) => { button.disabled = true });
        container.appendChild(retry);
        return;
    }

    else if (computerWin < 4 && playerWin < 4) {
        if (p === c) {
            paragraph.textContent = "We have a tie!";
            paragraph.setAttribute("style", "color:black;");
            return 1;
        } else if (p === "rock" && c === "paper" || p === "scissors" && c === "rock" || p === "paper" && c === "scissors") {
            paragraph.textContent = "You lose! " + firstUpperC + " beats " + firstUpperP + ". Better luck next time!";
            paragraph.setAttribute("style", "color:red;");
            return 2;
        } else {
            paragraph.textContent = "You win! " + firstUpperP + " beats " + firstUpperC + ". Good job!";
            paragraph.setAttribute("style", "color:green;");
            return 3;
        }
    } else {
        return;
    }


}

