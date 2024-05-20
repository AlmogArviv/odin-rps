
let HumanScore = 0;
let ComputerScore = 0;

function getComputerChoice() 
{
    const choices = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * (choices.length));
    return choices[index];
}

function getHumanChoice() 
{
    let choice = prompt("(r)rock, (p)paper or (s)scissors?");
    choice = choice.toLowerCase();

    return choice;
}

function playRound()
{
    let HumanChoice = getComputerChoice();//getHumanChoice();
    let ComputerChoice = getComputerChoice();

    let RoundResult = HumanChoice.localeCompare(ComputerChoice)
    if (RoundResult == 1) {
        console.log("You won the round!");
        HumanScore++;
    } else if (RoundResult == -1) {
        console.log("You lost the round!");
        ComputerScore++;
    } else {
        console.log("Round tie!");
    }
    console.log("You: " + HumanScore + ", Computer: " + ComputerScore + ".")
}

function playGame(rounds)
{
    for(let i = 0; i < rounds; i++){
        playRound();
    }

    if (HumanScore > ComputerScore) {
        console.log("You Win!");
    }else if (HumanScore < ComputerScore) {
        console.log("You Lost!");
    } else {
        console.log("It's a Tie!");
    }
}

console.log(playGame(5));