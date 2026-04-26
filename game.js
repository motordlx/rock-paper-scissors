
let computerScore=0;
let userScore=0;

let rs=document.getElementById("round");

let rock =document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let end=document.getElementById("end");
function getComputerChoice(){

     const array=["rock",'paper','scissor'];

   return array[Math.floor(Math.random()*array.length)];
}

let userChoice="";
rock.addEventListener("click",()=>{userChoice="Rock";playRound()});

paper.addEventListener("click",()=>{userChoice="Paper";playRound()});

scissor.addEventListener("click",()=>{userChoice="Scissor";playRound()});



function playRound(){

   let  computerChoice=getComputerChoice();

    if(userChoice==='Rock'){
        if(computerChoice==='scissor'){
            rs.innerText="user won this round "+computerChoice;
            userScore++;
        }
        else if(computerChoice==='paper') {
            rs.innerText="computer won this round "+computerChoice;
            computerScore++;
        }
        else{
           rs.innerText="draw this round "+computerChoice;
        }

    }
    else if(userChoice==='Scissor'){
        if(computerChoice==='paper'){
            rs.innerText="user won this round "+computerChoice;
            userScore++;
        }
        else if(computerChoice==='Rock') {
            rs.innerText="computer won this round "+computerChoice;
            computerScore++;
        }
        else{
            rs.innerText="draw this round "+computerChoice;
        }

    }
    else{
        if(computerChoice==='rock'){
            rs.innerText="user won this round "+computerChoice;
            userScore++;
        }
        else if(computerChoice==='scissor') {
            rs.innerText="computer won this round "+computerChoice;
            computerScore++;
        }
        else{
            rs.innerText="draw this round "+computerChoice;
        }
    }
}
 let en =document.getElementById("en");


end.addEventListener("click",()=> {
    if (computerScore > userScore) {
        en.innerText="comoputer won this game"
    } else if (computerScore < userScore) {
        en.innerText="user won this game"
    } else {
        en.innerText="draw";
    }
});

