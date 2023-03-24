const p1Button = document.querySelector('#p1Btn');
const p2Button = document.querySelector('#p2Btn');
const resetBtn = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');


let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', ()=>{
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winScore){
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1Display.textContent = p1Score;
    }
    
})
p2Button.addEventListener('click', ()=>{
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winScore){
            isGameOver = true;
            p1Display.classList.add('has-text-danger');
            p2Display.classList.add('has-text-success');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
    
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
        p1Score = 0;
        p2Score = 0;
        
        p1Display.textContent = 0;
        p2Display.textContent = 0;
        p1Display.classList.remove('has-text-success', 'has-text-danger');
        p2Display.classList.remove('has-text-danger', 'has-text-success');
        p1Button.disabled = false;
        p2Button.disabled = false;
}
// resetBtn.addEventListener('click', ()=>{
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = 0;
//     p2Display.textContent = 0;
// })   

    
