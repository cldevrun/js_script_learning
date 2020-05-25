let timer;
let playerScore = 0;
let cpuScore = 0;

function playRound (playerChoice, computerChoice) {
    var tie = ['paperpaper','scissorsscissors','rockrock'];
    var lose = ['paperscissors','scissorsrock','rockpaper'];
    var win = ['paperrock','scissorspaper','rockscissors'];
    var pChoice = playerChoice.toLowerCase();
    var cChoice = computerChoice.toLowerCase();
    var choice  = pChoice + cChoice;
    if (tie.includes(choice)) return "You both tied!";
    if (lose.includes(choice)) return "You lose! " + pChoice + " loses to " + cChoice;
    return "You win! " + pChoice + " beats " + cChoice;  
}

function computerPlay () {
    var myArray = ['Rock', 'Scissors', 'Paper'];
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function scoreUpdate(outcome) {
    if (outcome.includes("win")) playerScore++;
    if (outcome.includes("lose")) cpuScore++;
    document.querySelector('p[data-key=player]').innerHTML = playerScore;
    document.querySelector('p[data-key=opponent]').innerHTML = cpuScore;
}

function imgClicked(e) {
    clearTimeout(timer);
    let outcome;
    let player = e.attributes[0].value;    
    e.classList.add('chosen');
    timer = setTimeout(function() {
        e.classList.remove('chosen');
        outcome = playRound(player, computerPlay());
        scoreUpdate(outcome);
        document.querySelector('p[data-key=outcome]').innerHTML = outcome;
    }, 100);
}