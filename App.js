let userscore=0;
let computerscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepar=document.querySelector("#user-score");
const computerscorepar=document.querySelector("#computer-score");

const genComputerChoice =()=>{
    const options=["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=() =>{
    msg.innerText="game was Draw. Play again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,computerchoice )=>{
    if(userWin)
    {   userscore++;
        userscorepar.innerText=userscore;
        msg.innerText=`you win! :) your ${userChoice} beats ${computerchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        computerscore++;
        computerscorepar.innerText=computerscore;
        msg.innerText=`you loose :( ${computerchoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userChoice) => {
    //Genarate Computer choice
    const computerchoice = genComputerChoice();

    if(userChoice===computerchoice){
        //draw
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissors,paper
           userWin= computerchoice==="paper" ? false:true;
        } 
        else if (userChoice==="paper")
        {
            //rock,scissors
            userWin=computerchoice==="scissors" ? false:true;
        }
        else
        {
             //paper,rock
             userWin=computerchoice==="rock" ? false:true;
        }
        showWinner(userWin,userChoice,computerchoice);
           
    }

}



choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id")
        playgame(userChoice);
        
    });
}); 
