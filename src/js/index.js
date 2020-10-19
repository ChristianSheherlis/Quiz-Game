import { questionBank } from "./Questions";
import { DOMSelectors } from "./DOM"; //it is greying it out cause they are no DOM Selectors YET

//I prefer to keep all my global variables up here, though they can be moved if you'd like
let questionNumb = -1;

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//this shuffles both the order of the questions, and the order to the answers to those questions
function shuffleEntireBank() {
  shuffle(questionBank);

  //this shuffles the order to the answers
  const shuffledQuiz = questionBank.map((item) => {
    item.answers = shuffle(item.answers);
    return item;
  });

  console.log(shuffledQuiz);
}

let score = 0;

console.log(score);

//after shuffling the question bank the below function will pull the first question
//when the function is called again it will call the next question

function nextQuestion() {
  questionNumb += 1;
  DOMSelectors.displayContainer.insertAdjacentHTML(
    "afterbegin",
    ` <p class="question">${questionBank[questionNumb].question}</li>
      <div class="answer-btns">
          <button class="ans">${questionBank[questionNumb].answers[0]}</button>
          <button class="ans">${questionBank[questionNumb].answers[1]}</button>
          <button class="ans">${questionBank[questionNumb].answers[2]}</button>
          <button class="ans">${questionBank[questionNumb].answers[3]}</button>
      </div>`
  );
}

shuffleEntireBank();
nextQuestion();
