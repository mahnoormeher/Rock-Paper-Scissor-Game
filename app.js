let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScore=document.querySelector("#user-score");
const compScore=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
const randIdx=Math.floor(Math.random()*3);
return options[randIdx];

}
const drawGame=()=>{
   // console.log("game was draw.")
    msg.innerText="Game was drwa.Play Again";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userScore.innerText=userscore;
        //console.log("you win!")
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScore.innerText=compscore;
        //console.log("you lose.")
        msg.innerText=`you lose. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }

}

const playGame=(userchoice)=>{
    console.log("userchoice = ",userchoice);
    //generate computer choice
    const compchoice=genCompChoice();
    console.log("computer choice = ",compchoice);
    if(userchoice===compchoice){
  drawGame()
    }  //draw game
else{
 userWin=true;
if(userchoice==="rock"){
    //scissor,paper
    userWin=compchoice==="paper"?false:true;
}else if(userchoice==="paper"){
    //rock,scissor
    userWin=compchoice==="scissor"?false:true;
}else{
    //rock,paper
    userWin=compchoice==="rock"?false:true;

}
showWinner(userWin,userchoice,compchoice);
}};



choices.forEach((choice)=>{
   // console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
       // console.log("choice was clicked",userchoice);
        playGame(userchoice);

    });

});