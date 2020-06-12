    //  Grab Elements
    let rock = document.getElementById('rock'),
    paper = document.getElementById('paper'),
    scissors = document.getElementById('scissors'),
    message = document.getElementById('message'),
    reload = document.getElementById('reload'),
    cpuScore = document.getElementById('cpuScore'),
    youScore = document.getElementById('youScore')
    container = document.getElementById('container'),
    signInContainer = document.querySelector('.signInContainer');


    //Computer selection
    let cpuSelect = Math.floor(Math.random() * 10);
    console.log(cpuSelect)

    //Event Listeners
    rock.addEventListener('click', rockFunc);
    paper.addEventListener('click', paperFunc);
    scissors.addEventListener('click', scissorsFunc);
    reload.addEventListener('click', reloadPage)

    //Shows game
   function showGame(){
     container.style.display = 'block';
     signInContainer.style.display ='none';
   }

   function calculateWinner(action) {
     let winText = 'You win!';
     let tieText = 'It is a tie!';
     let loseText = 'You lose.';
     let resultText = '';
     let messageColor = '';

    // check if computer select paper
    if (cpuSelect <= 4) {
      switch(action) {
        case 'rock':
          resultText = 'paper. ' + loseText;
          messageColor = 'red';
          break;
        case 'paper':
          resultText = 'paper. ' + tieText;
          messageColor = '#3c3b3d';
          break;
        case 'scissors':
          resultText = 'paper. ' + winText;
          messageColor = 'green';
          break;
        default: 
          resultText = 'paper. ' + tieText;
          messageColor = '#3c3b3d';
      }
    } else if (cpuSelect > 4 && cpuSelect <= 7){

      // check if computer select scissors
      switch(action) {
        case 'rock':
          resultText = 'scissors. ' + winText;
          messageColor = 'green';
          break;
        case 'paper':
          resultText = 'scissors. ' + loseText;
          messageColor = 'red';
          break;
        case 'scissors':
          resultText = 'scissors. ' + tieText;
          messageColor = '#3c3b3d';
          break;
        default: 
          resultText = 'scissors. ' + tieText;
          messageColor = '#3c3b3d';
      }
    } else {
      // check if computer select rock
      switch(action) {
        case 'rock':
          resultText = 'rock. ' + tieText;
          messageColor = '#3c3b3d';
          break;
        case 'paper':
          resultText = 'rock. ' + winText;
          messageColor = 'green';
          break;
        case 'scissors':
          resultText = 'rock. ' + loseText;
          messageColor = 'red';
          break;
        default: 
          resultText = 'rock. ' + tieText;
          messageColor = '#3c3b3d';
      }
    }
    message.innerHTML = "<h1>The computer selected " + resultText+ "</h1>";
    
    // message styling
    message.style.color = messageColor;
    message.style.fontFamily = 'Montserrat', "sans-serif";
    message.style.paddingTop = '20px';
   }
    //Game Functions
    function rockFunc() {
      calculateWinner('rock');
    }

    function scissorsFunc() {
      calculateWinner('scissors');
    }

    function paperFunc() {
      calculateWinner('paper');
    }

    function reloadPage(){
      location.reload();
      message.style.display = 'none';
    }
    

    