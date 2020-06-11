    //  Grab Elements
    let rock = document.getElementById('rock'),
    paper = document.getElementById('paper'),
    scissors = document.getElementById('scissors'),
    message = document.getElementById('message'),
    reload = document.getElementById('reload'),
    cpuScore = document.getElementById('cpuScore'),
    youScore = document.getElementById('youScore')
    container = document.getElementById('container'),
    // signIn = document.getElementById('sign-in'),
    signInContainer = document.querySelector('.signInContainer');


    //Computer selection
    let cpuSelect = Math.floor(Math.random() * 10);
    console.log(cpuSelect)

    //Event Listeners
    rock.addEventListener('click', rockFunc);
    paper.addEventListener('click', paperFunc);
    scissors.addEventListener('click', scissorsFunc);
    reload.addEventListener('click', reloadPage)


   function showGame(){
     container.style.display = 'block';
     signInContainer.style.display ='none';
   }

    //Game Functions
    function rockFunc(){
      if (cpuSelect <= 4) {
        message.innerHTML = "<h1>The computer selected paper.  You win!</h1>";
        message.style.color = 'green';
        message.style.fontFamily = 'Montserrat', "sans-serif";
        message.style.paddingTop = '20px';
      } else if (cpuSelect > 4 && cpuSelect <= 7){
        message.innerHTML = "<h1>The computer selected scissors.  You win!</h1>";
        message.style.color = 'green';
        message.style.fontFamily = 'Montserrat', "sans-serif";
        message.style.paddingTop = '20px';
      } else {
        message.innerHTML = "<h1>The computer selected rock.  It is a tie!</h1>";
        message.style.color = '#3c3b3d';
        message.style.fontFamily = 'Montserrat', "sans-serif";
        message.style.paddingTop = '20px';
      }
    }

    function scissorsFunc() {
      if (cpuSelect <= 4) {
        message.innerHTML = "<h1>The computer selected paper.  You win!</h1>";
        message.style.color = 'green';
        message.style.fontFamily = 'Montserrat', "sans-serif";
        message.style.paddingTop = '20px';
      } else if (cpuSelect > 4 && cpuSelect <= 7){
        message.innerHTML = "<h1>The computer selected scissors.  It is a tie!</h1>";
        message.style.color = '#3c3b3d';
        message.style.fontFamily = 'Montserrat', "sans-serif";
        message.style.paddingTop = '20px';
      } else {
        message.innerHTML = "<h1>The computer selected rock.  You lose!</h1>";
        message.style.color = 'red';
        message.style.fontFamily = 'Montserrat', "sans-serif";
        message.style.paddingTop = '20px';
      }
    }

    function paperFunc() {
      if (cpuSelect <= 4) {
        message.innerHTML = "<h1>The computer selected paper.  It is a tie!</h1>";
        message.style.color = '#3c3b3d';
        message.style.fontFamily = 'Montserrat', "sans-serif";
        message.style.paddingTop = '20px';
      } else if (cpuSelect > 4 && cpuSelect <= 7){
        message.innerHTML = "<h1>The computer selected scissors.  You lose!</h1>";
        message.style.color = 'red';
        message.style.fontFamily = 'Montserrat', "sans-serif";
        message.style.paddingTop = '20px';
      } else {
        message.innerHTML = "<h1>The computer selected rock.  You lose!</h1>";
        message.style.color = 'red';
        message.style.fontFamily = 'Montserrat', "sans-serif";
        message.style.paddingTop = '20px';
      }
    }

    function reloadPage(){
      location.reload();
      message.style.display = 'none';
    }
    

    