const p1Score =  {
    score: 0,
    button: document.querySelector('#btn1'),
    display: document.querySelector("#display1")
}
const p2Score = {
    score: 0,
    button: document.querySelector('#btn2'),
    display: document.querySelector("#display2")
} 

let gameOver = false;
let winScore = 3;
const winningScore = document.querySelector('#selectScore');
const resetButton = document.querySelector('#resetBtn');


winningScore.addEventListener('change', function () {
    winScore = parseInt(this.value)
    reset();
})


function reset () {
    gameOver = false;
    for(let p of [p1Score, p2Score]){
        p.score = 0;
        p.display.textContent = 0;
        p.button.classList.remove('disabled')
        p.button.disabled = false;
    }
}

function score(player, opponent) {
    if(!gameOver) {
        player.score += 1;
        if(player.score === winScore){
            gameOver = true;
            player.button.classList.add('disabled');
            opponent.button.classList.add('disabled');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1Score.button.addEventListener('click', function () {
    score(p1Score, p2Score);
})

p2Score.button.addEventListener('click', function () {
    score(p2Score, p1Score);
})

resetButton.addEventListener('click', reset)