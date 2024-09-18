let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");
let newgamebtn = document.querySelector("#new-btn")
let turnO = true;
let winPattern = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
    ];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO === true){
            box.innerText ="O"
            turnO = false
        }
        else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true;
        checkWinner()
    })
});

let disablebtn = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

let enablebtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

let resetGame = () =>{
        turnO = true
        enablebtn();
        msgContainer.classList.add("hide")
};

let checkWinner = () => {
    for(let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val)
            }
        }
    }
}

let showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner Is "${winner}"`;
    msgContainer.classList.remove("hide")
    disablebtn()
}

newgamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);