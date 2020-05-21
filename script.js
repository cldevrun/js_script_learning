

function playRound(e) {
    const key = document.querySelector('div[data-key='+e.target.attributes[0].nodeValue+']');
    key.classList.add('chosen');
    setTimeout(function() {key.classList.remove('chosen');}, 100);
}

window.addEventListener('click', playRound);


/*
const container = document.querySelector('#container');
const content1  = document.createElement('p');
const content2 = document.createElement('h3');
const content3 = document.createElement('div');
const content4 = document.createElement('h1');
const content5 = document.createElement('p');
content1.textContent = "Hey I'm red";
content2.textContent = "I'm a blue h3!";
content4.textContent = "I'm in a div";
content5.textContent = "ME TOO!";
content1.style.color = 'red';
content2.style.color = 'blue';
content3.setAttribute('id', 'newDiv');
content3.style.backgroundColor = 'yellow';
content3.style.borderColor = 'green';
content3.style.borderStyle = 'solid';
container.appendChild(content1);
container.appendChild(content2);
content3.appendChild(content4);
content3.appendChild(content5);
container.appendChild(content3);
*/

/*
<script>
  function computerPlay () {
    var myArray = ['Rock', 'Scissors', 'Paper'];
    return myArray[Math.floor(Math.random() * myArray.length)];
  }
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
  function game () {
    var player = 0;
    var cpu = 0;
    for (i = 0; i < 5; i++) {
      p = window.prompt("Choose rock, paper, or scissors");
      answer = playRound(p ,computerPlay());
      console.log(answer)
      if (answer.includes("lose")) cpu++;
      if (answer.includes("win")) player++;
    }
    if (cpu > player) console.log("Computer wins with a score of "+cpu+"!");
    else console.log("Player wins with a score of "+player+"!");
  }

  game();
</script>
*/