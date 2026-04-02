let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let  msg = document.querySelector("#msg");



let turnO = true; // playerX,  playerO


const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1 ,4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
};



boxes.forEach((box) =>  {
box.addEventListener("click",() => {
    if(turnO) { // playerO
        box.innerText = "O";
            box.classList.add("oColor");
        turnO = false;
} else { // player X
    box.innerText  = "X";
        box.classList.add("xColor");
    turnO = true
} 
  box.disabled = true;
  checkWinner();
});
});


const disabledboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}; 


const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("oColor");
        box.classList.remove("xColor");
    }
};



const showWinner = (winner) => {
    msg.innerText = `congratulation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledboxes ();
}


const checkWinner = () => {
    for(let pattern of winpatterns) {
        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

if(post1Val != "" && post2Val != "" &&post3Val != "") {
    if(post1Val === post2Val && post2Val === post3Val){
        showWinner(post1Val);
          
    }
}
}
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click",resetGame);






 