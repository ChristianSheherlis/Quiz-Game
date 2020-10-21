import { questionBank } from "./Questions";
import { DOMSelectors } from "./DOM"; //it is greying it out cause they are no DOM Selectors YET

//I prefer to keep all my global variables up here, though they can be moved if you'd like

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

//after shuffling the question bank the below function will pull the first question
//when the function is called again it will call the next question

function init() {
  let questionNumb = -1;
  let score = 0;
  DOMSelectors.start.addEventListener("click", function nextQuestion(e) {
    DOMSelectors.start.innerHTML = "";
    DOMSelectors.displayContainer.innerHTML = "";
    console.log(score);
    questionNumb += 1;
    console.log(questionNumb);
    if (questionNumb === 10) {
      DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        `<p class= "score">You Scored ${score}!</p>
          <p class= "score">Refresh the page to try again!</p>
        `
      );
    } else {
      DOMSelectors.displayContainer.insertAdjacentHTML(
        "afterbegin",
        ` <p class="question">${questionBank[questionNumb].question}</li>
      <div class="answer-btns">
          <button class="ans ans0">${questionBank[questionNumb].answers[0]}</button>
          <button class="ans ans1">${questionBank[questionNumb].answers[1]}</button>
          <button class="ans ans2">${questionBank[questionNumb].answers[2]}</button>
          <button class="ans ans3">${questionBank[questionNumb].answers[3]}</button>
      </div>`
      );
      const answerSelector = {
        answerZero: document.querySelector(".ans0"),
        answerOne: document.querySelector(".ans1"),
        answerTwo: document.querySelector(".ans2"),
        answerThree: document.querySelector(".ans3"),
      };
      console.log(answerSelector);
      answerSelector.answerZero.addEventListener("click", function (e) {
        if (
          questionBank[questionNumb].answers[0] ===
          questionBank[questionNumb].correctAnswer
        ) {
          score = score + 1;
          nextQuestion();
        } else {
          nextQuestion();
        }
      });
      answerSelector.answerOne.addEventListener("click", function (e) {
        if (
          questionBank[questionNumb].answers[1] ===
          questionBank[questionNumb].correctAnswer
        ) {
          score = score + 1;
          nextQuestion();
        } else {
          nextQuestion();
        }
      });
      answerSelector.answerTwo.addEventListener("click", function (e) {
        if (
          questionBank[questionNumb].answers[2] ===
          questionBank[questionNumb].correctAnswer
        ) {
          score = score + 1;
          nextQuestion();
        } else {
          nextQuestion();
        }
      });
      answerSelector.answerThree.addEventListener("click", function (e) {
        if (
          questionBank[questionNumb].answers[3] ===
          questionBank[questionNumb].correctAnswer
        ) {
          score = score + 1;
          nextQuestion();
        } else {
          nextQuestion();
        }
      });
    }
  });
}

shuffleEntireBank();
init();
