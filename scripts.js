let score = JSON.parse(localStorage.getItem('score')) || {
    won : 0,
    lost : 0,
    tie : 0
};

updateScoreElement();

// let temp = localStorage.getItem('score');
// console.log(temp);


// if(score === null){
//     score = {
//         won : 0,
//         lost : 0,
//         tie : 0
//     }
// }




function playGame(playerMove){
    const computerMove =  pickComputerMove();
    let result = '';
    if(playerMove === 'Rock'){
        if(computerMove==='Rock'){
            //score.tie+=1;
            result = 'Tie.';        
        }
        else if(computerMove === 'Paper'){
            //score.lost+=1;
            result = 'You lost.';
        }
        else if(computerMove === 'Scissors'){
            //score.won+=1;
            result = 'You won.';
        }                
    }

    else if(playerMove === 'Paper'){
        if(computerMove==='Rock'){
            //score.won+=1;
            result = 'You won.';        
        }
        else if(computerMove === 'Paper'){
            //score.tie+=1;
            result = 'Tie.';
        }
        else if(computerMove === 'Scissors'){
            //score.lost+=1;
            result = 'You lost.';
        }       
    }
    else if(playerMove === 'Scissors'){
        if(computerMove==='Rock'){
            //score.lost+=1;
            result = 'You lost.';        
        }
        else if(computerMove === 'Paper'){
            //score.won+=1;
            result = 'You won.';
        }
        else if(computerMove === 'Scissors'){
            //score.tie+=1;
            result = 'Tie.';
        }       
    }

    if(result === 'You won.'){
        score.won+=1;
    }
    else if(result === 'You lost.'){
        score.lost+=1;
    }
    else if(result ==='Tie.'){
        score.tie+=1;
    }
    
    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
    .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You
          <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
          <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
          Computer`;
        
}

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Won = ${score.won} Lost = ${score.lost} Tie = ${score.tie}`;
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber>=0 && randomNumber<1/3){
        computerMove = 'Rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove = 'Paper';
    }
    else if(randomNumber>=2/3 && randomNumber<1){
        computerMove = 'Scissors';
    }
    return computerMove;
}


// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.classList.add(savedTheme);
updateThemeButton();

// Toggle function
function toggleTheme(){
    if(document.body.classList.contains('dark')){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('theme','light');
    } else {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('theme','dark');
    }
    updateThemeButton();
}

// Update button text
function updateThemeButton(){
    const button = document.querySelector('.theme-toggle');
    if(document.body.classList.contains('dark')){
        button.textContent = '☀';
    } else {
        button.textContent = '🌙';
    }
}
