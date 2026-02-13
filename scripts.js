(function playRPS() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
    const totalGames = 5;
    let currentGame = 0;

    function playRound() {
        const choices = ["rock", "paper", "scissors"];
        const getHumanChoice = prompt("Enter Rock, Paper, or Scissors:").trim().toLowerCase();
        const getComputerChoice = choices[Math.floor(Math.random() * 3)];

        if (!choices.includes(getHumanChoice)) {
            alert("Invalid choice! Please select Rock, Paper, or Scissors.");
            return playRound(); // Restart if the choice is invalid
        }

        alert(`You chose: ${getHumanChoice.charAt(0).toUpperCase() + getHumanChoice.slice(1)}\nComputer chose: ${getComputerChoice.charAt(0).toUpperCase() + getComputerChoice.slice(1)}`);
        
        if (getHumanChoice === getComputerChoice) {
            alert("It's a tie!");
            ties++;
        } else if (
            (getHumanChoice === "rock" && getComputerChoice === "scissors") ||
            (getHumanChoice === "paper" && getComputerChoice === "rock") ||
            (getHumanChoice === "scissors" && getComputerChoice === "paper")
        ) {
            alert("You win!");
            wins++;
        } else {
            alert("You lose!");
            losses++;
        }

        currentGame++;
        alert(`Score after ${currentGame} games:\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);
        
        if (currentGame < totalGames) {
            playRound(); // Continue playing until 5 games
        } else {
            alert(`Final Score:\nWins: ${wins}\nLosses: ${losses}\nTies: ${ties}`);
        }
    }

    playRound(); // Start the game
})();