let userScore=0;
let computerScore=0;
let winMsg=document.querySelector("#winMsg");
let choices=document.querySelectorAll(".choice");
let UserScore=document.querySelector("#User");
let ComputerScore=document.querySelector("#Computer");
let resetBtn=document.querySelector("#resetBtn");

const resetBtnFun=()=>{
    winMsg.innerHTML="";
    userScore=0;
    computerScore=0;
    UserScore.innerHTML=userScore;
    ComputerScore.innerHTML=computerScore;
}

resetBtn.addEventListener("click",()=>{
    resetBtnFun();
});

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});



const playGame=(userChoice)=>{
    const compChoice=computerChoice();
    if(userChoice===compChoice){
        let resultString=`This match is a draw. You both Chose ${userChoice}`;
        winMsg.innerHTML=resultString;
    }
    else{
        let userWin=findWinner(userChoice,compChoice);
        if(userWin===true){
            let resultString=`You won this match by choosing ${userChoice} against ${compChoice}`;
            userScore++;
            winMsg.innerHTML=resultString;
            UserScore.innerHTML=userScore;
        }
        else{
            let resultString=`You lost this match by choosing ${userChoice} against ${compChoice}`;
            computerScore++;
            ComputerScore.innerHTML=computerScore;
            winMsg.innerHTML=resultString;
        }
    }
}

const findWinner=(userChoice,compChoice)=>{
    if(userChoice==="rock"){
        if(compChoice==="paper")return false;
        else return true;
    }
    else if(userChoice==="paper"){
        if(compChoice==="rock")return true;
        else return false;
    }
    else{
        if(compChoice==="rock")return false;
        return true;
    }
}

const computerChoice=()=>{
    const options=["rock","paper","scissors"];
    let index=Math.floor((Math.random()*3));
    return options[index];
}