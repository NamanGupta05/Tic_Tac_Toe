let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msgbox = document.querySelector(".msgContainer");
let game = document.querySelector(".new");
let msg = document.querySelector(".set");

let win = true;

const ans = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6]
];

const resetGames = ()=>{
    win = true;
    enabledboxes();
    msgbox.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" ,()=>{
        console.log("button was clicked");
        if(win){
            box.innerText = 'O';
            win = false;
        }
        else{
            box.innerText = 'X';
            win = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledboxes=()=>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enabledboxes=()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}🔥`;
    msgbox.classList.remove("hide");
    disabledboxes();
}

const checkWinner = () =>{
for(let pattern of ans){
    let posValOne = boxes[pattern[0]].innerText;
    let posValTwo= boxes[pattern[1]].innerText;
    let posValThree = boxes[pattern[2]].innerText;
    if(posValOne != "" && posValTwo != "" && posValThree != ""){
        if(posValOne===posValTwo && posValTwo===posValThree){
            console.log("winners");
            showWinner(posValOne);
        }
    }
  }
};

game.addEventListener("click", resetGames);
reset.addEventListener("click", resetGames);
