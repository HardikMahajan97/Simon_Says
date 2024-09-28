let userseq = [];
let gameseq = [];
let maxScore = 0;
let started=false;
let level = 0;
let btns = ["orange", "red", "blue", "green"];
let h2 = document.querySelector("h2");
let button = document.querySelector("#Start-btn");
button.addEventListener("click", function(){
    if(started===false){
        console.log("Game started");
        started=true;

        levelUp();
    }
});

// To see what color the game is flashing 
function gameFlash(btn){
    btn.classList.add("flash");  
    setTimeout(function(){
        btn.classList.remove("flash");  
    },200);
}
// to see what color the USER is flashing
function userFlash(btn){
    btn.classList.add("userflash");   
    setTimeout(function(){
        btn.classList.remove("userflash"); 
    },150);
}

// This function looks into the activities after starting the game
function levelUp(){
    userseq = [];
    level++; 
    h2.innerText = ` Level ${level}`;
    let randIndx = Math.floor(Math.random() * 4);  
    let randColor = btns[randIndx];            
    let randbtn = document.querySelector(`.${randColor}`); 
    gameseq.push(randColor); 
    gameFlash(randbtn);
}


function checkAns(idx){
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000); 
        }
    }else{
        h2.innerHTML = `Game Over! Your Score is <b>${level}</b>. <br>  Press Any key to Start!`;
        h3 = document.createElement("h3");
        
        if(level > maxScore){
            maxScore = level;
            h2.appendChild(h3);
            h3.innerHTML = `Your highest Score is <b>${maxScore}</b> .`;
        }else{
            h2.appendChild(h3);
            h3.innerHTML = `Your highest  Score is <b>${maxScore}</b>.`;
        }

    }
}

function btnPress(){
    console.log(this.innerText);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(gameseq);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}
function gameReset(){
    gameseq =[];
    userseq = [];
    level = 0;
    started = false;
    maxScore = 0;
}