//values for choosing between R,P or S
const min = 1;
const max = 3;

let playerWins = 0;
let computerWins = 0;
let ties = 0;

//bool values to determine win or loss
let roundWin = false;
let roundLoss = false;

let playerSelection;//ask for player selection 

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");
const outcomeDiv = document.querySelector('.outcome');


//for automated playing
//let playerSelection = Math.floor(Math.random() * (max - min + 1) + min);  

// game();

// function game(rounds = 1){
//     //Plays a 5 round game of rock paper scissors
//     //Displays scoreboard after round
//   restartScore();
//   console.log("Game Start:")
//   for (i = 0; i < rounds; i++){
//     playerSelection = getPlayerChoice();
//     let computerSelection = computerPlay();
//     playRound(playerSelection, computerSelection);      	
//   }
//   console.log("Here is the score: ");
//   displayScore(playerWins, computerWins, ties);              		           

// }

//resets the scoreboard
restartScore();



rockBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
});


function playRound(playerSelection, computerSelection){
    //Plays a round of Rock Paper Scissors
    //shows string of results of round
    // playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        const p = document.createElement('p');
        getScore(roundWin = false, roundLoss = false);
        p.innerText = `It's a tie! You both picked ${playerSelection}`;
        outcomeDiv.appendChild(p);
    } else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        getScore(roundWin = true, roundLoss = false);
        const p = document.createElement('p');
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        outcomeDiv.appendChild(p);
        
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        getScore(roundWin = true, roundLoss = false);
        const p = document.createElement('p');
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        outcomeDiv.appendChild(p);
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        getScore(roundWin = true, roundLoss = false);
        const p = document.createElement('p');
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        outcomeDiv.appendChild(p);
    } else {
        getScore(roundWin = false, roundLoss = true);
        const p = document.createElement('p');
        p.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
        outcomeDiv.appendChild(p);
    }
}

// function getPlayerChoice(){ 
//     //Gets random number between 1 and 3  ++
// /*             let result = Math.floor(Math.random() * (max - min + 1) + min);
//     return result;  */
    
//     let playerChoice;
//     let choice = prompt("Choose a number between 1 and 3: ", "");
//     if (choice == 1){
//         return playerChoice = 'rock';
//     } else if (choice == 2){
//         return playerChoice = 'paper';
//     } else if (choice == 3){
//         return playerChoice = 'scissors';
//     }
// } 

function computerPlay(){
    //Randomly returns 'rock', 'paper', or 'scissors'  ++
    /* let choice = getChoice(min, max); */
    let choice = Math.floor(Math.random() * (max - min + 1) + min);
    let compChoice;
    if (choice == 1){
        return compChoice = 'rock';
    } else if (choice == 2){
        return compChoice = 'paper';
    } else {
        return compChoice = 'scissors';
    }
}


function getScore(roundWin = false, roundLoss = false){
    //keeps score of the game
    if (roundWin == true && roundLoss == false){
        playerWins += 1;
        return;
    } else if (roundWin == false && roundLoss == true){
        computerWins += 1;
        return;
    } else {
        ties += 1;
        return;
    }
}

function displayScore(playerWins, computerWins, ties){
    //Displays score and winner and loser of game
    console.log(`\nPlayer wins: ${playerWins}`);
    console.log(`Computer wins: ${computerWins}`);
    console.log(`ties: ${ties}\n`);

    if (playerWins > computerWins){
        console.log(`\n\nPlayer, you are the winner!`);
    } else if (playerWins < computerWins){
        console.log(`\n\nComputer, you are the winner!\nSorry player, you lost.`);
    } else if (playerWins == computerWins){
        console.log(`\n\nTied game! No winner.`);
    }     
}

function restartScore(){
    //resets scoreboard after each run
    playerWins = 0;
    computerWins = 0;
    ties = 0;

}

