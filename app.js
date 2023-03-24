const p1 = {
    score: 0,
    button: document.querySelector('#p1Btn'),
    display: document.querySelector('#p1Display') 
}
const p2 ={
    score: 0,
    button: document.querySelector('#p2Btn'),
    display: document.querySelector('#p2Display') 
}

const resetBtn = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let isGameOver = false;

p1.button.addEventListener('click', ()=>{
    updateScores(p1,p2)
})
p2.button.addEventListener('click', ()=>{
    updateScores(p2,p1)
})

winningScoreSelect.addEventListener('change', ()=>{
    let score = document.getElementById('playto');
    let scoreMaks = score.value;
    winScore = parseInt(scoreMaks);
    rst();
})

// winningScoreSelect.addEventListener('change', ()=>{
//     winScore = parseInt(this.value);  
// })

resetBtn.addEventListener('click', rst)

function rst(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
        // p1.score = 0;
        // p2.score = 0;
        
        // p1.display.textContent = 0;
        // p2.display.textContent = 0;
        // p1.display.classList.remove('has-text-success', 'has-text-danger');
        // p2.display.classList.remove('has-text-danger', 'has-text-success');
        // p1.button.disabled = false;
        // p2.button.disabled = false;
}
// resetBtn.addEventListener('click', ()=>{
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = 0;
//     p2Display.textContent = 0;
// })   

    
