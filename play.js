var selections = ['rock', 'paper', 'scissor']
let myScore  = 0;
let comScore = 0;

game();
function computerSelection() {
    let computerSelect;
    computerSelect = selections[Math.floor(Math.random()*selections.length)]
    return computerSelect;
}

function playRound(playerSelect, computerSelect){
    if (computerSelect == 'rock' && playerSelect=='rock'){
        alert("it's a tie!");
        }
    else if (computerSelect == 'rock' && playerSelect == 'scissor'){
        alert("You Rock Wins!");
        comScore ++;
    }
    else if (computerSelect == 'rock' && playerSelect == 'paper'){
        alert("Paper paper paper Wins!");
        myScore ++;
    }
    else if (computerSelect == 'paper' && playerSelect == 'paper'){
        alert("It's a tie!");
    }
    else if (computerSelect == 'paper' && playerSelect == 'rock'){
        alert("Paper paper paper Wins!");
        comScore ++;
    }
    else if (computerSelect == "paper" && playerSelect == 'scissor'){
        alert("Scissor Wins!");
        myScore ++;
    }
    else if (computerSelect == 'scissor' && playerSelect == 'scissor'){
        alert("It's a tie!")
    }
    else if (computerSelect == 'scissor' && playerSelect == 'paper'){
        alert("Scissor Wins!");
        comScore ++;
    }
    else if (computerSelect == 'scissor' && playerSelect == 'rock'){
        alert("You Rock Wins!");
        myScore ++;
    }
}

function winner (y) {
    if ( y == 6 && myScore > comScore){
        alert("you won the game!")
        }else if ( y == 6 && myScore < comScore){
            alert("you lost the game!")
        }else if ( y == 6 && (myScore = comScore)){
            alert("it's a tie!")
        }
}

function game(){
    var x = 1;
    while ( x >= 1 && x <= 5){
        ++x;
    }
    var playerSelect=prompt("Pick rock,paper,or scissors");
    var playerSelect = playerSelect.toLowerCase();
    playRound (playerSelect, computerSelection());
    winner(x);
     
}; 

  

