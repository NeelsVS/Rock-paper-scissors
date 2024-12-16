function getComputerChoice(){ //function for computer to pick between rock, paper or scissors.

    const getComputerChoice = Math.floor(Math.random()*3);

    if (getComputerChoice == 0){
       return "Rock";
    } else if(getComputerChoice == 1){
        return "Paper";
    } else if(getComputerChoice == 2){
       return  "Scissors";
    }

    return getComputerChoice;
}

function getPlayerChoice(){
    let chosen = false;
    let choice;

    while (!chosen){
    choice = prompt("Choose between rock, paper or scissors", "");
    choice = choice.charAt(0).toUpperCase() + choice.substring(1);

      if( choice === "Rock" || choice === "Paper" || choice === "Scissor"){
            chosen = true;
        } else {
            alert("Choice not valid!");
            
        } 
    }return choice
}

getPlayerChoice()
