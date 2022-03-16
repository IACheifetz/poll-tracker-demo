// import functions and grab DOM elements
import { renderPastPoll } from './render-utils.js';
const option1AddButton = document.querySelector('#option-1-add');
const option2AddButton = document.querySelector('#option-2-add');
const option1UndoButton = document.querySelector('#option-1-undo');
const option2UndoButton = document.querySelector('#option-2-undo');
const questionForm = document.querySelector('form');
const closePollButton = document.querySelector('#close-poll');
const questionEl = document.querySelector('#poll-question');
const option1TitleEl = document.querySelector('#option-1-title');
const option2TitleEl = document.querySelector('#option-2-title');
const option1VotesEl = document.querySelector('#option-1-votes');
const option2VotesEl = document.querySelector('#option-2-votes');

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
option1AddButton.addEventListener('click', () =>{
    option1Votes++;
    option1VotesEl.textContent = option1Votes;
});

option2AddButton.addEventListener('click', () =>{
    option2Votes++;
    option2VotesEl.textContent = option2Votes;
});

option1UndoButton.addEventListener('click', () =>{
    option1Votes--;
    option1VotesEl.textContent = option1Votes;
});

option2UndoButton.addEventListener('click', () =>{
    option2Votes--;
    option2VotesEl.textContent = option2Votes;
});

questionForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const questionData = new FormData(questionForm);

    question = questionData.get('question');
    option1Title = questionData.get('option-1');
    option2Title = questionData.get('option-2');

    displayCurrentPoll();
});

function displayCurrentPoll() {
    questionEl.textContent = question;
    option1TitleEl.textContent = option1Title;
    option2TitleEl.textContent = option2Title;
    option1VotesEl.textContent = option1Votes;
    option2VotesEl.textContent = option2Votes;    
}

closePollButton.addEventListener('click', () => {

    questionForm.reset();

    const poll = makePoll();

    pastPollsArray.push(poll);

    resetState();

    displayCurrentPoll();

    displayList();
});

function makePoll() {
    return {
        question: question,
        option1Title: option1Title,
        option2Title: option2Title,
        option1Votes: option1Votes,
        option2Votes: option2Votes
    };
}

function resetState() {
    question = '';
    option1Title = '';
    option2Title = '';
    option1Votes = 0;
    option2Votes = 0;
}

function displayList() {
    pastPollsEl.textContent = '';

    for (let pastPoll of pastPollsArray) {
        const container = renderPastPoll(pastPoll);
        pastPollsEl.append(container);
    }

}