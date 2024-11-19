function playGame() {
        // Define possible choices
        const choices = ["rock", "paper", "scissors"];
        let rounds = 3;
    
        for (let i = 0; i < rounds; i++) {
            // Prompt user for their choice
            let userChoice = prompt(`Round ${i + 1}: Enter Rock, Paper, or Scissors:`).toLowerCase();
    
            // Validate user's input
            if (!choices.includes(userChoice)) {
                alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
                i--; // Reattempt the round
                continue;
            }
    
            // Generate a random choice for the computer, ensuring it changes each time
            let computerChoice = choices.splice(Math.floor(Math.random() * choices.length), 1)[0];
    
            // Display the choices
            alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`);
    
            // Determine the winner
            if (userChoice === computerChoice) {
                alert("It's a tie!");
            } else if (
                (userChoice === "rock" && computerChoice === "scissors") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissors" && computerChoice === "paper")
            ) {
                alert("You win!");
                return; // End the game if the user wins
            } else {
                alert("Computer wins!");
            }
    
            // Reset choices array for the next round
            choices.push("rock", "paper", "scissors");
        }
    
        // End message if all rounds are played and no winner
        alert("Game over! Better luck next time.");
    }