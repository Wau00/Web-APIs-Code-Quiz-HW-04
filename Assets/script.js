var btnTimer;
var timer;
var finalScore;

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
  finalScore = 100;
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
    
  }, 1000);
}


function wrongAnswer(){ 
  
  scoreAlert.textContent = "Incorrect! -25pts and -10s"
  scoreAlert.style.color = "red";
  scoreAlert.style.display = "block";
  
  btnTimer= btnTimer- 10;
  if (btnTimer < 0){
   clearInterval(timer);
  }
  document.getElementById("finalscore").textContent = finalScore;
  finalScore = finalScore-25;
  console.log (finalScore);

}

function correctAnswer(){
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    scoreAlert.style.display = "block";
    scoreAlert.textContent = "Correct! +5pts and +5s"
    scoreAlert.style.color = "green";
    btnTimer= btnTimer+5;
    finalScore= finalScore +5;
}

function secondcorrectAnswer (){
questionTwo.style.display = "none";
questionThree.style.display = "block";
scoreAlert.style.display = "block";
    scoreAlert.textContent = "Correct! +5pts and +5s"
    scoreAlert.style.color = "green";
    btnTimer= btnTimer+5;
    finalScore= finalScore +5;
    console.log (finalScore);
}

function thirdcorrectAnswer (){
  questionThree.style.display = "none";
  questionFour.style.display = "block";
  scoreAlert.style.display = "block";
  scoreAlert.textContent = "Correct! +5pts + 5s"
  scoreAlert.style.color = "green";
  btnTimer= btnTimer+5;
  finalScore= finalScore +5;
  console.log (finalScore);
}

function fourthcorrectAnswer (){
  questionFour.style.display = "none";
  questionFive.style.display = "block";
  scoreAlert.style.display = "block";
  scoreAlert.textContent = "Correct! +5pts + 5s"
  scoreAlert.style.color = "green";
  btnTimer= btnTimer+5;
  finalScore= finalScore +5;
  console.log (finalScore);
}

function fifthcorrectAnswer (){
  questionFive.style.display = "none";
  enterInitials.style.display = "block";
  scoreAlert.style.display = "block";
  scoreAlert.textContent = "Correct! +5pts + 5s"
  scoreAlert.style.color = "green";
  scoreAlert.style.display = "none";
  btnTimer= btnTimer+5;
  finalScore= finalScore +5;
  console.log (finalScore);
}
