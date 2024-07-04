let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGame = document.querySelector(".new");
let msgContainer  = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let turnX = true;

let winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnX){
            box.innerHTML = "X";
            turnX = false;
        }
        else{
            box.innerHTML = "O";
            turnX = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const showWinner = (winner)=>{
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner= ()=>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                console.log("winner ",pos1);
                console.log("winner ",pos1);
                showWinner(pos1);
            }
        }

    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}
const resetGame = () =>{
    turnX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
