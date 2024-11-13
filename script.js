function playGame() {
    // Prompt user to enter their choice
    let userChoice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();

    // Define possible choices
    const choices = ["rock", "paper", "scissors"];

    // Generate a random choice for the computer
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Validate user's input
    if (!choices.includes(userChoice)) {
        alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
        return; // Exit the function if input is invalid
    }

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
}