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

      let playerSelection;
      let computerSelection;  

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
            return "You win! Rock beats Scissors";f
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

      function game()
      {
          
          for (let i = 0; i < 5; i++)
          { 
              let c = computerPlay();
              let p = prompt("Please enter: rock, paper or scissors.").toLowerCase();
              console.log(playRound(p, c));
              console.log("player: " + presult + " computer: " + cresult);
              
          }
      }
     game();
     console.log("total result is player: " + presult + " computer: " + cresult);
      