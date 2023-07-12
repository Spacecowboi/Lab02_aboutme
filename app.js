'use strict';

function greetUser(){
  let name = prompt('What is your name?');
  alert('Welcome to the site, ' + name + '!');
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

function guessaNumber(){

  let attempts = 4;
  let rightAnswer = 42;

  while (attempts > 0) {
    let guess = +prompt('Time for some numbers! Guess a number (between 1 and 100):');

    if (Number.isInteger(guess) && guess >=1 && guess <= 100){
      if (guess > rightAnswer){
        alert('A little too high!');

      } else if (guess < rightAnswer){

        alert ('Too low!');

      } else {

        alert('You got it!');

        return;
      }
    } else {

      alert('Please enter a real number.');
    }
  }
  alert('You gave it all you had. The correct answer is ' + rightAnswer + '.');
}

guessaNumber();
