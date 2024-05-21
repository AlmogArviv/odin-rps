
let rounds = 0;
let numOfRounds = 5;
let HumanScore = 0;
let ComputerScore = 0;

function getComputerChoice() 
{
    let index = Math.floor(Math.random() * 3);
    return index;
}

function playRound(HumanInput)
{
    if (rounds == numOfRounds){
        rounds = 1;
    }

    let ComputerChoice = getComputerChoice();
    let HumanChoice = 0;
    switch (HumanInput){
        case("Rock"):
        HumanChoice = 0;
        break;
        case("Paper"):
        HumanChoice = 1;
        break;
        case("Scissors"):
        HumanChoice = 2;
        break;
    }

    if (HumanChoice == ComputerChoice){ 
        resultBlock.textContent = "Round tie!";
    } else if (HumanChoice == 0 && ComputerChoice == 2 ||
                HumanChoice == 1 && ComputerChoice == 0 ||
                HumanChoice == 2 && ComputerChoice == 1) {
                    resultBlock.textContent = "You won the round!";
        HumanScore++;
        rounds++;
    } else {
        resultBlock.textContent = "You lost the round!";
        ComputerScore++;
        rounds++;
    }
    scoreBlock.textContent = "Score: " + "You: " + HumanScore + ", Computer: " + ComputerScore;

    if (rounds == numOfRounds) {
        annouceWinner(HumanScore > ComputerScore ? "You" : "The Computer");
    }
}

const playButtons = document.querySelectorAll(".play-btn");
playButtons.forEach((element) => {
    element.addEventListener("click", function(){ playRound(element.textContent); });
});

function annouceWinner(winner) {
    scoreBlock.textContent = "";
    resultBlock.textContent = winner + " won after " + numOfRounds + " rounds!";
    HumanScore = 0;
    ComputerScore = 0;
}

const contentDiv = document.querySelector(".content");
contentDiv.style["display"] = "flex";
contentDiv.style["flex-direction"] = "column";
contentDiv.style["justify-content"] = "center";
contentDiv.style["align-items"] = "center";

const scoreDiv = document.createElement("div");
scoreDiv.style["display"] = "flex";
scoreDiv.style["flex-direction"] = "column";
scoreDiv.style["justify-content"] = "center";
scoreDiv.style["align-items"] = "center";
scoreDiv.style["margin"] = "8px 0px";
scoreDiv.style["border-style"] = "solid";
scoreDiv.style["padding"] = "22px";
contentDiv.appendChild(scoreDiv);

const scoreBlock = document.createElement("p");
scoreBlock.classList.add("score");
scoreBlock.textContent = "Score: " + "You: " + HumanScore + ", Computer: " + ComputerScore;
scoreDiv.appendChild(scoreBlock);

const resultBlock = document.createElement("p");
resultBlock.classList.add("result");
resultBlock.textContent = "result";
scoreDiv.appendChild(resultBlock);
