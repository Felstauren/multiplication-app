/* global var */
let randNum = Math.floor(Math.random()*6)+4; /* first random number */
let randNum2 = Math.floor(Math.random()*6)+1; /* second random number */
let score; /* variable score */
score = localStorage.getItem("score"); /* display number from local storage */

if (!score){ 
   score = 0 /* if Number from Local Storage = "null" change to 0 */
}

window.onload = function(){  /* Funtion load website visit */



/* Question */
const Question = "What is " + randNum + " multiplay by " + randNum2 + "?" /* text */
document.getElementById("Question").innerHTML = Question /* change text everytime */

/* Score */
document.getElementById("Score").innerText = `score: ${score}` /* change Text in hmtl */


}

/* Function */
function checkAnswer() {
const answer = document.getElementById("answer").value   
const rightAnswer = randNum * randNum2

if(answer == rightAnswer){
   score++; /* add + 1 to "score" */
   updateLocalStrorage(); /* change Local Storage to Number */
   location.reload(); /* reload page */
} else {
   score--; /* - 1 to score */
   updateLocalStrorage();
   location.reload();
}


}

function updateLocalStrorage(){
   localStorage.setItem("score", score ); /* set new Key in Local Storage */
   score = localStorage.getItem("score"); /* change Score */
}

document.addEventListener("keypress", e => {
   if(e.key === 'Enter'){
      checkAnswer()
   }
})