function getComputerChoice(){ //function for computer to pick between rock, paper or scissors;

    const getComputerChoice = Math.floor(Math.random()*3);

    if (getComputerChoice == 0){
       return "Rock";
    } else if(getComputerChoice == 1){
        return "Paper";
    } else if(getComputerChoice == 2){
       return  "Scissor";
    }

    return getComputerChoice;
}

function getPlayerChoice(){ // input to get player choice;
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

let playerScore = 0, computerScore = 0; // score counters;


let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();


function playRound(){
    function playRound(playerChoice, computerChoice){ // checks who wins the round and adds points to winner score

        if (playerChoice == "Rock" && computerChoice == "Scissor"){
             console.log("You WIN!");
             playerScore ++;
     
        }else if (playerChoice == "Paper" && computerChoice == "Rock"){
             console.log("You WIN!");
             playerScore ++;
     
         }else if (playerChoice == "Scissor" && computerChoice == "Paper"){
             console.log("You WIN!");
             playerScore ++;
     
         }else if (playerChoice == computerChoice){
             console.log("Its a tie!")
     
         } else {
             console.log("You loose!");
             computerScore ++
         }
     
     }
}





