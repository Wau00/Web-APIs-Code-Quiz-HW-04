var btnTimer;
var timer;
var finalscore = 0;
var questionNumber = 0;

var questions = document.getElementById("questionsBox");
var buttonAnswer = document.getElementById("btn");
var btnSelector = document.getElementsByClassName("answerBtn");

var answerOne = document.getElementById("btn1");


var dataInfo = [
  {
    promptQuest:
      "Which of the following variable is everywhere in your JavaScript code?",
    choices: [
      "global variable",
      "local variable",
      "Both of the above",
      "None of the above",
    ],
    answer: "global variable",
  },
  {
    promptQuest: "How to write an if statment in JavaScript?",
    choices: ["if i === 4", "if (i === 5)", "if [i === 5]", "else (if === 5)"],
    answer: "if (i === 5)",
  },
  {
    promptQuest: "Inside which HTML element do we put the JavaScript?",
    choices: ["<button>", "<div>", "<script>", "<html>"],
    answer: "<script>",
  },
  {
    promptQuest: "How do you write 'Hello World' in alert box?",
    choices: [
      "click('Hello World')",
      "console.log('Hello World')",
      "alert('Hello World')",
      "None of the above",
    ],
    answer: "alert('Hello World')",
  },
  {
    promptQuest: "What is negative Infinity?",
    choices: ["A number", "A tag", "A function", "All of the above"],
    answer: "A number",
  },
  {
    promptQuest: "When was JavaScript created?",
    choices: ["1981", "1999", "2006", "1995"],
    answer: "1995",
  },
];

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
    
