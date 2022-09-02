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
