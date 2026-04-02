let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score")



let genCompChoice = () => {
    let option = ["rock", "paper","scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

let drawGame = () => {
    msg.innerText = "Game was draw play again."
    msg.style.backgroundColor = "#081b31";

}


let showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "you win!"
       msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "you lose!"
        msg.style.backgroundColor = "red";

    }
}

let playGame = (userChoice) => {
    // generate computer choice
    let compChoice = genCompChoice();
    if(userChoice === compChoice){
        // draw game
        drawGame();
    } else {
        let userWin = true; 
        if(userChoice === "rock") {
            // scissor, paper
          userWin =   compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner (userWin);
    }
};


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click" , () => {
        let userChoice = choice.getAttribute("id")
        playGame(userChoice);
});
});
   




















