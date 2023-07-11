'use strict';

function greetUser(){
  let name = prompt('What is your name?');
  alert('Welcome to the site, ' + name + '!');
}

greetUser();

function fixInput(input) {

  return input.toLowerCase();
}

// Validating yes or no
function validaton(response) {

  response = fixInput(response);
  return response === 'yes' || response === 'no';
}

// prompt then validate the user responses
function askQuestion(question){

  let response = prompt(question);

  if (validaton(response)){
    //console.log(response);
    alert('Awesome!');
  } else {
    //console.log(response);
    alert('Oof size large m8');
  }
}

askQuestion('First question: Do you like anime?' );
askQuestion('Second question: Have you ever traveled?');
askQuestion('Third question: Do you like video games?');
askQuestion('Fourth question: Have you ever run a marathon');
askQuestion('Fifth question: Do you enjoy cannabis?');
