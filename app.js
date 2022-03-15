// import functions and grab DOM elements
const optionAAddButton = document.querySelector('#option-1-add');
const optionBAddButton = document.querySelector('#option-2-add');
const optionAUndoButton = document.querySelector('#option-1-undo');
const optionBUndoButton = document.querySelector('#option-2-undo');

const closePollButton = document.querySelector('#close-poll');
const questionEl = document.querySelector('#poll-question');
const optionATitleEl = document.querySelector('#option-1-title');
const optionBTitleEl = document.querySelector('#option-2-title');
const optionAVotesEl = document.querySelector('#option-1-votes');
const optionBVotesEl = document.querySelector('#option-2-votes');

const pastPollsEl = document.querySelector('.past-polls');
// let state
let question = '';
let option1Votes = 0;
let option2Votes = 0;
let option1Title = '';
let option2Title = '';

const pastPollsArray = [];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
