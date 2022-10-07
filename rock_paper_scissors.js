function getChoice() {

    const choiceOptions = ["Rock","Paper","Scissors"];

    let choice = choiceOptions[getRandomValue()]
    return choice

}

function getRandomValue(){

    let randNum = Math.random() * 3;
    randNum = Math.floor(randNum);
    return randNum;

}

function getWinner( computerChoice, humanChoice ){

    let optionWinner;
    let options = [computerChoice, humanChoice];
    let winner;

    // get option winner
    if (computerChoice == humanChoice) {
        optionWinner = "It's a tie";
        winner = 'Tie'
        showWinner(winner, optionWinner);
        return winner;
    }
        // if those elements in the array of options
    else if (  options.every( elem => ["Rock","Paper"].indexOf(elem) > -1) ) {
        optionWinner = "Paper";
    }
    else if (  options.every( elem => ["Rock","Scissors"].indexOf(elem) > -1) ) {
        optionWinner = "Rock";
    }
    else
        optionWinner = "Scissors";

    // get winner name
    if ( options.indexOf(optionWinner) == 1) {
        winner = "Computer";
    }
    else
        winner = "Human";
    
    showWinner(winner, optionWinner);
    return winner;
}

function showWinner(winner, optionWinner) {
    
    if ( winner == "Tie" ){
        console.log(optionWinner)
    }
    else
        console.log(`${winner} selected ${optionWinner}. ${winner} wins!!!`)

    return winner
}
    
function game(){

    let computerChoice = getChoice();
    let humanChoice = getChoice(); // later on this should be and input case-insensitive and remove spaces

    console.log(computerChoice, humanChoice);

    let winner = getWinner(computerChoice, humanChoice);
    
    return winner;

}

function playRound(){

    let computerWins = 0;
    let humanWins = 0;
    let ties = 0;
    let winner = '';

    for (let i = 0; i < 5; i++){
        
        winner = game()
        console.log(winner)

        if (winner == "Computer") {
            computerWins++;
        }
        else if ( winner == "Human"){
            humanWins++;
        }
        else
            ties++
    }

    console.log('');
    console.log(`Computer total wins: ${computerWins}`);
    console.log(`Human total wins: ${humanWins}`);
    console.log(`Ties : ${ties}`);
    
}