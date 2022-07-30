var readlineSync = require('readline-sync')

var score = 0;

var highscore = [{
  name: "Rakesh",
  score: 10
}]

var userName = readlineSync.question("Input your name please_____");
console.log("Welcome " + userName + "! lets check how much you know about football");

function game(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are correct")
    score++;
  }
  else {
    console.log("Nah! you are wrong")
  }
  console.log("Score = " + score)
}
var questions = [{
  question: "Who is the winner of 2021 Spanish league? ",
  answer: "Real Madrid"
}, {
  question: "Who is the G.O.A.T of football in modern era? ",
  answer: "Cristiano Ronaldo"
}, {
  question: "Who is the winner of 2021 Italian league? ",
  answer: "Inter MIlan"
}, {
  question: "Who is the Captain of India football team? ",
  answer: "Sunil Chhetri"
}, {
  question: "Who is the 2021 Champions league winner? ",
  answer: "Real Madrid"
}, {
  question: "Who is the 2021 Ballon d'Or winner? ",
  answer: "Messi"
}, {
  question: "Who is the King of football? ",
  answer: "Pele"
}, {
  question: "Who is the winner of 2021 English premier league? ",
  answer: "Manchester City"
}, {
  question: "Where will be the next world cup held? ",
  answer: "Qatar"
}, {
  question: "Which country won the 2018 Fifa World Cup? ",
  answer: "France"
}]
for (i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  game(currentquestion.question, currentquestion.answer)
}

if (score == highscore[0].score) {
  console.log(userName + ", your final score is " + score)
  console.log("Welcome to HALL OF FAME, " + userName)
  console.log(highscore[0].name + " was the highest earlier with " + highscore[0].score)
  console.log("______________________")
  console.log("Since you crack it, please share screenshot @ 9108671147, CONGRATULATIONS BUDDY")
} else {
  console.log(userName + ", your final score is " + score + ", try again")
  console.log("______________________")
  console.log(highscore[0].name + " score the highest of " + highscore[0].score)

}

