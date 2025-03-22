let gameSeq = [];
let userseq = [];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "green", "purple"];

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game started");
        started = true;
    }

    levelUp();
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250)
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250)
}

function levelUp(){
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq)
    btnFlash(randBtn);
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn)

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
}

function checkAns(idx){
    if(gameSeq[idx] == userseq[idx]){
        if(gameSeq.length == userseq.length){
            setTimeout(levelUp, 300);
        }
    }else{
        h2.innerHTML = `Game Over.! Your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userseq = [];
}