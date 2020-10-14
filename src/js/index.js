import { questionBank } from "./Questions";
//import { DOMSelectors } from " ./DOM"; //it is greying it out cause they are no DOM Selectors YET

//I prefer to keep all my global variables up here, though they can be moved if you'd like
let questionNumb = 0;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
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

  shuffle(questionBank);
  console.log(questionBank);

  function nextQuestion(){
    console.log(questionBank[questionNumb]);
    questionNumb += 1;
  }
  
  nextQuestion();