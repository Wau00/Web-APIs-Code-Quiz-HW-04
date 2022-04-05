var btnTimer;
var timer;

var data = [
  {
    question:
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
    question: "How to write an if statment in JavaScript?",
    choices: ["if i === 4", "if (i === 5)", "if [i === 5]", "else (if === 5)"],
    answer: "if (i === 5)",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<button>", "<div>", "<script>", "<html>"],
    answer: "<script>",
  },
  {
    question: "How do you write 'Hello World' in alert box?",
    choices: [
      "click('Hello World')",
      "console.log('Hello World')",
      "alert('Hello World')",
      "None of the above",
    ],
    answer: "alert('Hello World')",
  },
  {
    question: "What is negative Infinity?",
    choices: ["A number", "A tag", "A function", "All of the above"],
    answer: "A number",
  },
  {
    question: "When was JavaScript created?",
    choices: ["1981", "1999", "2006", "1995"],
    answer: "1995",
  },
];

const start = document.getElementById("startHide");
start.addEventListener("click", startGame);

function startGame() {
  btnTimer = 60;
  document.getElementById("container").style.display = "block";
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

function questionsTrivia() {}
