function getComputerChoice(){
    const arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection){
    
        if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
            return `You Tied! Both selected ${computerSelection}`;
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper")
            return `You Lose! Paper beats Rock`;
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors")
            return `You Win! Rock beats Scissors`;
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock")
            return `You Win! Paper beats Rock`;
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors")
            return `You Lose! Scissors beat Paper`;
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")
            return `You Lose! Rock beats Scissors`;
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")
            return `You Win! Scissors beat Paper`;
        else
            return `Invalid input, try again`;
}

function game(){
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter rock, paper or scissors:");
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();