
let computerScore=0;
let userScore=0;
function getComputerChoice(){

     const array=["rock",'paper','scissor'];

   return array[Math.floor(Math.random()*array.length)];
}

function getUserChoice(){

    let userChoice=prompt("Choose between Rock,Paper,Scissor:");

    return userChoice;
}

function playRound(){

   let  computerChoice=getComputerChoice();
    let userChoice=getUserChoice();

    if(userChoice==='Rock'){
        if(computerChoice=='scissor'){
            console.log("user won this round");
            userScore++;
        }
        else if(computerChoice=='paper') {
            console.log("computer won this round");
            computerScore++;
        }
        else{
            console.log("draw this round");
        }

    }
    else if(userChoice==='Scissor'){
        if(computerChoice=='paper'){
            console.log("user won this round");
            userScore++;
        }
        else if(computerChoice=='Rock') {
            console.log("computer won this round");
            computerScore++;
        }
        else console.log("drawn this round");

    }
    else{
        if(computerChoice=='rock'){
            console.log("user won this round");
            userScore++;
        }
        else if(computerChoice=='scissor') {
            console.log("computer won this round");
            computerScore++;
        }
        else{
            console.log("drawn this round");
        }
    }
}

function game(){
    for(let i=0;i<5;i+=1)
    {
        playRound();
    }

    if(computerScore>userScore){
        console.log("computer won "+ computerScore);
    }
    else if(computerScore<userScore){
        console.log("user won "+userScore);
    }
    else{
        console.log("Draw");
    }

}
game();

