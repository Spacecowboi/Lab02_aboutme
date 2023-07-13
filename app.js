'use strict';
// Variable placement and score modifier courtesy of Charles! 
let score = 0;
let totalQuestions = 7;

function greetUser(){
  let name = prompt('What is your name?');
  alert('Welcome to my page, ' + name + '! You are about to be asked ' + totalQuestions + 'questions.');
}

greetUser();

function fixInput(input) {

  input = input.toLowerCase();

  return input;
}

// Validating yes or no
function validaton(response, answer) {

  response = fixInput(response);
  return response === answer;
}


// prompt then validate the user responses
function askQuestion(question, answer){

  let response = prompt(question);

  if (validaton(response, answer)){
    //console.log(response);
    alert('Awesome!');
    score ++;
  } else {
    //console.log(response);
    alert('Oof size large m8');
  }
}

askQuestion('First question: Do you like anime?', 'yes' );
askQuestion('Second question: Have you ever traveled?', 'yes');
askQuestion('Third question: Do you like video games?', 'yes');
askQuestion('Fourth question: Have you ever run a marathon', 'yes');
askQuestion('Fifth question: Do you enjoy cannabis?', 'yes');

//Adding guessing game question for question 6

function getRandomNumber() {
  let newRandomNumber = 0;

  newRandomNumber = Math.floor(Math.random() * 100) + 1;
  return newRandomNumber;
}



function guessaNumber(){

  let maxAttempts = 4;
  // let rightAnswer = 42;
  let rightAnswer = getRandomNumber();

  for(let attempts = 1; attempts <=maxAttempts; attempts++) { //using a for loop to cycle through 4 attempts
    let guess = +prompt('Time for some numbers! Guess a number (between 1 and 100):');

    if (Number.isInteger(guess) && guess >=1 && guess <= 100){ // if the input is a string, convert it to a number and check to see if it is 1-100
      if (guess > rightAnswer){ // if the guess is higher than the rightAnswer, give an alert that says it is too high
        alert('A little too high!');

      } else if (guess < rightAnswer){ // if the guess is lower than the rightAnswer, give an alert that lets them know it is too low

        alert ('Too low!');

      } else {

        alert('You got it!'); // OTHERWISE, let them know they figured it out, as long as they guessed the right number

        score++;

        return;
      }
    } else {

      alert('Please enter a real number.'); // anything other than 1-100 will generate an alert asking to provide a real number
    }
  }
  alert('You gave it all you had. The correct answer is ' + rightAnswer + '.'); // If all attempts have been exhausted, give them a little pick me up and then give the right answer
}

guessaNumber();


// Question 7
// Reqs: - Multiple correct answers stored in an array, - User has 6 attempts to guess right answer
// - Guesses end once a user guesses correcet answer, - Display all possible answers, - Use a loop. Maybe.
function questionSeven(){

  let finalQuestion = prompt('And now for the FINAL question, what is my favorite manga?');

  const answers = ['berserk', 'cowboy bebop', 'samurai champloo', 'vinland saga', 'chainsaw man'];

  let attempts = 6;


  //Multiple attempt loop

  for(let i = 1; i <= attempts; i++) {
    if (answers.includes(finalQuestion.toLocaleLowerCase())) {
      console.log('WOOOO YOU GOT IT!');
      score++;
      break;

    } else {
      console.log('Wrongo chief, have another go.');
      console.log('Attempts remaining: ' + (attempts - i));
      finalQuestion = prompt('Try again, What is my FAVORITE manga?');
    }
  }
  //Display correct answers
  let possibleAnswers = '';
  for(let j = 0; j < answers.length; j++){
    possibleAnswers += answers[j];
    if(j !== answers.length - 1) {
      possibleAnswers += ', ';
    }
  }
  alert('The correct answers are: ' + possibleAnswers);
}

questionSeven();

alert('You got ' + score + ' correct answers out of ' + totalQuestions + ' questions, good job!');
