let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const your_Score = document.querySelector("#your-score");
const com_Score  = document.querySelector("#Com-score");

const showWinner = (userWin ,userChoice, comChoice) => { 
  // msg.innerText = `pick our movees`;
  if (userWin) {
    userScore++;
    your_Score.innerText = userScore;
    console.log("you win ");
    msg.innerText = `You win! Your ${userChoice} beat ${comChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    comScore++;
    com_Score.innerText = comScore;
    console.log("you lose ");
    msg.innerText = `You lose! ${comChoice} beat Your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  console.log("game was draw ");
  msg.innerText = "Game Draw! Play Again";
  msg.style.backgroundColor = "rgb(8, 6, 21)"

};

const playGame = (userChoice) => {
  console.log("user choice :", userChoice);
  // generated computer choice
  let comChoice = gencompChoice();
  console.log("computer choice :", comChoice);
  // user and computer choice compare
  if (userChoice === comChoice) {
    // draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // paper , scissor
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissor, rock
      userWin = comChoice === "scissor" ? false : true;
    } else {
      // rock, paper
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice,comChoice);
  }
};

choices.forEach((choices) => {
  console.log(choices);
  choices.addEventListener("click", () => {
    const userChoice = choices.getAttribute("id");
    playGame(userChoice);
  });
});

const gencompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  let comChoice = Math.floor(Math.random() * 3);
  return options[comChoice];
};


