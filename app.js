const p1Button = document.querySelector('#p1Btn');
const p2Button = document.querySelector('#p2Btn');
const reset = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const winScoreSelect = document.querySelector('#total')


let p1Score = 0;
let p2Score = 0;
let winScore = 2;
let isGameOver = false;

p1Button.addEventListener('click', ()=>{
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winScore){
            isGameOver = true;
        }
        p1Display.textContent = p1Score;
    }
    
})
p2Button.addEventListener('click', ()=>{
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winScore){
            isGameOver = true;
        }
        p2Display.textContent = p2Score;
    }
    
})
let b = 0;
winScoreSelect.addEventListener('change', ()=>{

    b = this.value;
    console.log(b);
})

reset.addEventListener('click', ()=>{
    isGameOver = false;
        p1Score = 0;
        p2Score = 0;
        
        p1Display.textContent = 0;
        p2Display.textContent = 0;
})
    
