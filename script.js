//Function: User's Play
const getUserChoice = (userChoice) => {
    let play = userChoice.toLowerCase();
    if (play === 'rock' || play === 'paper' || play === 'scissors' || play === 'bomb') {
      return play;
    }
    else {
      play = 'invalid';
      return play
    }
  }
  
//Function: Computer's Play
const getCompChoice = () => {
    let rand = Math.floor(Math.random() * 3);
    switch (rand) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors'
        break;
    }
  }
  
  
  //ATTENTION USER
  //CHOOSE YOUR HAND HERE:
  let playerHand = getUserChoice('rock');

  
  //Compare Hands to determine Winner
  let compHand = getCompChoice();
  let playerWin = false;
  if (playerHand === 'rock' && compHand === 'scissors') {
    playerWin = true;
  } 
  else if (playerHand === 'paper' && compHand === 'rock') {
    playerWin = true;
  }
  else if (playerHand === 'scissors' && compHand === 'paper') {
    playerWin = true;
  } 
  else if (playerHand === compHand) {
    playerWin = 'draw';
  }
  else if (playerHand === 'bomb') {
      playerWin = true;
  }
  

  //Console Logs
  console.log("WELCOME TO: ROCK PAPER SCISSORS"); //Title
  if (playerHand === 'invalid') {   //Control Invalid User Input
    console.log('Invalid choice. Please choose either rock, paper, or scissors.'); 
  }
  else {    //Continue Program With Valid Response
    console.log(`\nYou chose: ${playerHand}`);
    console.log(`Your opponent: ${compHand}\n\n`);
    //Win Results:
    if (playerWin === 'draw') {
      console.log("DRAW \nTry Again");
    }
    else if (playerWin === true) {
      console.log('Congratulations! You won!!');
    }
    else if (playerWin === false) {
      console.log('Uh-Oh... You lost. \nTry again');
    }
  }
