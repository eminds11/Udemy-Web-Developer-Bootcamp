var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var r1Button = document.getElementById("r1");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        console.log("Button 1 Clicked");
        p1Score++;
    if(p1Score === winningScore){
        console.log("game over");
        p1Display.classList.add("winner");
        gameOver = true;
       }
        p1Display.textContent = p1Score;
    }
})

p2Button.addEventListener("click", function(){
    if(!gameOver){
        console.log("Button 2 Clicked");
        p2Score++;
    if(p2Score === winningScore){
        console.log("game over");
        gameOver = true;
        p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
       }
})

r1Button.addEventListener("click", function(){
    reset();
})

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    console.log("Reset Clicked");    
};

numInput.addEventListener("change", function(){
    console.log("changed");
    winScore.textContent = numInput.value;
    winningScore = Number(numInput.value);
    reset();
});