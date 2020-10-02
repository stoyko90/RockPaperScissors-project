function computerPlay()
      {
        let r = Math.floor(Math.random() * 3) + 1;
        if (r == 1)
        {
            return "Rock";
        }
        if (r == 2)
        {
            return "Paper";
        }
        if (r == 3)
        {
            return "Scissors";
        }
      }    

      let cresult = 0;
      let presult = 0;

      function playRound(playerSelection, computerSelection)
      {
        let a = playerSelection.toLowerCase();
        let b = computerSelection.toLowerCase();
        if (a == "rock" && b == "paper")
        {
            cresult++;
            return "You lose! Paper beats Rock";
        }
        if (a == "rock" && b == "scissors")
        {
            presult++;
            return "You win! Rock beats Scissors";
        }
        if (a == "paper" && b == "rock")
        {
            presult++;
            return "You win! Paper beats Rock";
        }
        if (a == "paper" && b == "scissors")
        {
            cresult++;
            return "You lose! Scissors beats Paper";
        }
        if (a == "scissors" && b == "rock")
        {
            cresult++;
            return "You lose! Rock beats Scissors";
        }
        if (a == "scissors" && b == "paper")
        {
            presult++;
            return "You win! Scissors beats Paper";
        }
        if (a == b)
        {
            return "Draw!";
        }
      }  
         
    
    const p1 = document.querySelector("p");
    const div = document.createElement("div");        
    const div2 = document.createElement("div");
    div.style.whiteSpace = "pre";
    p1.appendChild(div); 
    p1.appendChild(div2);   

    
    function clickRock() {
        if (presult === 5) {
            return div2.textContent = "You reached 5 points, You win!!!";
        }
        else if (cresult === 5) {
            return div2.textContent = "The computer has reached 5 points, You lose !!!";
        }
        else {
            return div.textContent = playRound("rock", computerPlay()) + "\nplayer: " + presult + " computer: " + cresult;
        }
    }
    function clickPaper() {
        if (presult === 5) {
            return div2.textContent = "You reached 5 points, You win!!!";
        }
        else if (cresult === 5) {
            return div2.textContent = "The computer has reached 5 points, You lose !!!";
        }
        else {
            return div.textContent = playRound("rock", computerPlay()) + "\nplayer: " + presult + " computer: " + cresult;
        }
    }
    function clickScissors() {
        if (presult === 5) {
            return div2.textContent = "You reached 5 points, You win!!!";
        }
        else if (cresult === 5) {
            return div2.textContent = "The computer has reached 5 points, You lose !!!";
        }
        else {
            return div.textContent = playRound("rock", computerPlay()) + "\nplayer: " + presult + " computer: " + cresult;
        }
    }  
    
    document.getElementById("rockbtn").addEventListener("click", clickRock);

    document.getElementById("paperbtn").addEventListener("click", clickPaper);

    document.getElementById("scissorsbtn").addEventListener("click", clickScissors);

    
        
    

      