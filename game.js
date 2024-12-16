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

console.log(getComputerChoice())
