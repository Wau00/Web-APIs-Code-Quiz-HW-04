var btnTimer;
var timer;
var finalscore = 0;
var questionNumber = 0;

var questions = document.getElementById("questionsBox");
var buttonAnswer = document.getElementById("btn");
var btnSelector = document.getElementsByClassName("answerBtn");





const start = document.getElementById("startHide");
start.addEventListener("click", startGame);

function startGame() {
  btnTimer = 60;
  document.getElementById("firstQuestion").style.display = "block";
  startTimer();
}
function startTimer() {
  timer = setInterval(function () {

    btnTimer--;
    document.querySelector(".temporizer").textContent = btnTimer;
    if (btnTimer >= 0) {
      if (btnTimer <= 0) {
        clearInterval(timer);
      }
    }
    if (btnTimer === 0) {
      clearInterval(timer);
    }
  }, 1000);
}


function correctAnswer(){
    document.getElementById("firstQuestion").style.display = "none";
    document.getElementById("secondQuestion").style.display = "block";
}
    
function secondcorrectAnswer (){
document.getElementById("secondQuestion").style.display = "none";
document.getElementById("thirdQuestion").style.display = "block";

}

function thirdcorrectAnswer (){
  document.getElementById("thirdQuestion").style.display = "none";
  document.getElementById("fourthQuestion").style.display = "block";
}

function fourthcorrectAnswer (){
  document.getElementById("fourthQuestion").style.display = "none";
  document.getElementById("fifthQuestion").style.display = "block";
}

function fifthcorrectAnswer (){
  document.getElementById("fifthQuestion").style.display = "none";
  document.getElementById("finalResult").style.display = "block";
}