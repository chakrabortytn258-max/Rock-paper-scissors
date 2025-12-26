let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScorepara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#computer-score");

const emojiMap = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️"
};


const updateMsg=(gameWinner,compChoice,userChoice) => {
    msg.classList.remove("win","lose","draw");

 msg.style.animation = "none";
msg.offsetHeight; // force reflow
msg.style.animation = "pop 0.25s ease";


    if(gameWinner === "draw"){
        msg.innerText=`Oh it's a draw , you both choosed ${emojiMap[userChoice]}`;
        msg.classList.add("draw");

    } else if(gameWinner === "win"){
        msg.innerText=`Its a Win, ${emojiMap[userChoice]}  beats ${emojiMap[compChoice]}`;
        msg.classList.add("win");
    }
      else {
        msg.innerText=`Haha you lost, ${emojiMap[compChoice]} beats ${emojiMap[userChoice]}`;
        msg.classList.add("lose");
      }
    };

const updateScore=(gameWinner) => {
    if(gameWinner === "win"){
        userScore++;
        userScorepara.innerText=userScore;
    }

    else if(gameWinner === "lose"){
        compScore++;
        compScorePara.innerText=compScore;
    }
}


const getCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomIdx =Math.floor(Math.random()*options.length);
    return options[randomIdx];
}

const decideWinner = (userChoice,compChoice) => {
    if (userChoice === compChoice){
       return "draw";
       
    }
    if((userChoice === "rock" && compChoice === "scissors") ||
     (userChoice === "paper" && compChoice === "rock") ||
     (userChoice === "scissors" && compChoice === "paper") 
    )
    {
        return "win";
    }
    else{
        return "lose";
    }
};

 const playGame = (userChoice) =>{
    console.log("user choice :",userChoice);
    const compChoice = getCompChoice();
    console.log("computer choice :",compChoice);
    const gameWinner = decideWinner(userChoice,compChoice);
    console.log("It was a :", gameWinner);
    updateMsg(gameWinner,compChoice,userChoice);
    updateScore(gameWinner);
 }
    

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
       const userChoice = choice.getAttribute("id")
       playGame(userChoice);
    })
});

msg.style.animation = "none";
msg.offsetHeight; // force reflow
msg.style.animation = "pop 0.25s ease";


