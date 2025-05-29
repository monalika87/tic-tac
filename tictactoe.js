let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new");
let msgDiv = document.querySelector(".msg");
let msgText = document.querySelector("#hello");

let turn0 = true;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame = () =>{
    turn0=true;
    enableBoxes();
    msgDiv.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn0 === true){
            box.innerText="X";
            turn0 = false; 
        }
        else{
            box.innerText="O";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
};
const showWinner=(winner)=>{
    msgText.innerText = `congratulations, winner is ${winner}`;
    msgDiv.classList.remove("hide");
    disableBoxes();
};
const checkWinner=()=>{
    for(pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log
            let pos1val=boxes[pattern[0]].innerText;
            let pos2val=boxes[pattern[1]].innerText;
            let pos3val=boxes[pattern[2]].innerText;

            if(pos1val!=""&& pos2val!=""&& pos3val!=""){
                if(pos1val==pos2val && pos2val==pos3val )
                {
                    console.log("winner",pos1val);
                    showWinner(pos1val);
                }
            }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);