export function renderPastPoll(pastPoll) {
    const container = document.createElement('div');
    const pQuestionEl = document.createElement('p');
    const pTitle1 = document.createElement('p');
    const pTitle2 = document.createElement('p');
    const pVotes1 = document.createElement('p');
    const pVotes2 = document.createElement('p');

    container.classList.add('past-poll');
    pQuestionEl.textContent = pastPoll.question;
    pTitle1.textContent = pastPoll.option1Title;
    pTitle2.textContent = pastPoll.option2Title;
    pVotes1.textContent = pastPoll.option1Votes;
    pVotes2.textContent = pastPoll.option2Votes;

    container.append(pQuestionEl, pTitle1, pTitle2, pVotes1, pVotes2);

    return container;

}