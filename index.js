var readlineSync = require('readline-sync')

var score = 0;

var highscore = [{
  name: "Rakesh",
  score: 10
}]

var userName = readlineSync.question("Input your name please_____");
console.log("Welcome " + userName + "! lets check how much you know about football\nonly used a,b,c,d for answering...............");

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
  question: "Who is the winner of 2021 Spanish league?\n(a) Real Madrid \n(b) Manchester United \n(c) Barcelona \n(d) Liverpool\n",
  answer: "a"
}, {
  question: "Who is the G.O.A.T of football in modern era? \n(a) Messi\n(b) C. Ronaldo \n(c) Neymar\n(d) Mbappe\n",
  answer: "b"
}, {
  question: "Who is the winner of 2021 Italian league? \n(a) AC Milan\n(b) Juventus\n(c) Napoli\n(d) Inter MIlan\n",
  answer: "d"
}, {
  question: "Who is the Captain of India football team? \n(a) Gurpreet Singh\n(b) Sandesh Jhingan\n(c) Udanta Singh\n(d) Sunil Chhetri",
  answer: "d"
}, {
  question: "Who is the 2021 Champions league winner? \n(a) Barcelona\n(b) Liverpool\n(c) Real Madrid\n(d) PSG\n",
  answer: "c"
}, {
  question: "Who is the 2021 Ballon d'Or winner? \n(a) Messi\n(b) Modric\n(c) C.Ronaldo\n(d) Lewandowski\n",
  answer: "a"
}, {
  question: "Who is the King of football? \n(a) Maradona\n(b) Pele\n(c) Messi\n(d) Zidane\n",
  answer: "b"
}, {
  question: "Who is the winner of 2021 English premier league? \n(a) Manchester United\n(b) Liverpool\n(c) Arsenal\n(d) Manchester City\n",
  answer: "d"
}, {
  question: "Where will be the next world cup held? \n(a) Brazil\n(b) France\n(c) Qatar\n(d) Russia\n",
  answer: "c"
}, {
  question: "Which country won the 2018 Fifa World Cup? \n(a) Brazil\n(b) France\n(c) Croatia\n(d) France\n",
  answer: "d"
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

