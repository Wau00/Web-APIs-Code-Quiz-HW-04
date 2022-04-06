var btnTimer;
var timer;
var finalscore;

let scoreAlert = document.getElementById("scoreAlert")

let questionOne = document.getElementById("firstQuestion");
let questionTwo = document.getElementById("secondQuestion");
let questionThree = document.getElementById("thirdQuestion");
let questionFour = document.getElementById("fourthQuestion");
let questionFive = document.getElementById("fifthQuestion");
let enterInitials = document.getElementById("finalResult");


const start = document.getElementById("startHide");
start.addEventListener("click", startGame);

function startGame() {
  btnTimer = 60;
  document.getElementById("firstQuestion").style.display = "block";
  startTimer();
  }


function startTimer() {
  timer = setInterval(function () {
    start.style.display= "none";
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
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    scoreAlert.style.display = "block";
}

function secondcorrectAnswer (){
questionTwo.style.display = "none";
questionThree.style.display = "block";
scoreAlert.style.display = "block";

}

function thirdcorrectAnswer (){
  questionThree.style.display = "none";
  questionFour.style.display = "block";
  scoreAlert.style.display = "block";
}

function fourthcorrectAnswer (){
  questionFour.style.display = "none";
  questionFive.style.display = "block";
  scoreAlert.style.display = "block";
}

function fifthcorrectAnswer (){
  questionFive.style.display = "none";
  enterInitials.style.display = "block";
  scoreAlert.style.display = "block";
}

function wrongAnswer(){ 
  scoreAlert.textContent = "Incorrect! -25 pts and -10s"
  scoreAlert.style.color = "red";
  scoreAlert.style.display = "block";
}