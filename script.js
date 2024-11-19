function playGame() {
    //Define Possible choices
    const choices = ["rock", "paper", "scissors"];
    let rounds = 3;

    for (let i = 0; i<rounds; i++{
        //prompt user for choice
        let userChoice = prompt('Round ${i +1}: Enter Rock, Paper or Scissors:').toLowercase();
        
    // Validate user's input
    if (!choices.includes(userChoice)) {
        alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
        i--; //reattempt the round
        continue;
    }
    // Generate a random choice for the computer
    let computerChoice = choices.splice[Math.floor(Math.random() * choices.length),1 [0]];
    
    // Display the choices
    alert(`You chose: ${userChoice}\nComputer choses: ${computerChoice}`);

    // Determine the winner
    if (userChoice === computerChoice) {
        alert("It's a tie!");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You win!");
    } else {
        alert("Computer wins!");
    }
    //Reset choices array for next round
        choices.push("rock", "paper", "scissors");
        
    //End message if all rounds are played and no winner
        alert("Game over!Better luck next time.");
        
}
