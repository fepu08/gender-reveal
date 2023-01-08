const btnRevealGender = document.querySelector('#btn-reveal-gender');
const pGender = document.querySelector('#p-gender');
var toggleConfetti = true;

const boyString = 'Kisfiú';
const girlString = 'Kislány';
const result = 0;
const numOfPossibilities = 30;

btnRevealGender.addEventListener('click', (e) => {
  const possibilities = createPossibilitiesArray(boyString);
  pGender.style.textDecoration = '';
  //console.log(possibilities);
  showResult(pGender, possibilities);
});

function createPossibilitiesArray(result) {
  let loopLength;
  if (result === girlString) {
    loopLength = numOfPossibilities; // girl
  } else if (result === boyString) {
    loopLength = numOfPossibilities + 1; // boy
  } else {
    if (Math.random() >= 0.5) {
      loopLength = numOfPossibilities; // girl
    } else {
      loopLength = numOfPossibilities + 1; // boy
    }
  }

  const possibilities = [];
  for (let i = 0; i < loopLength; i++) {
    if (i % 2 === 0) {
      possibilities.push(boyString);
    } else {
      possibilities.push(girlString);
    }
  }

  return possibilities;
}

async function showResult(element, possibilities) {
  let timeoutLengthInMs = 10;
  let i = -1;

  await loopPossibilities(timeoutLengthInMs, possibilities, element);
  await highlight(element);
}

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

async function loopPossibilities(ms, possibilities, element) {
  for (let i = 0; i < possibilities.length; i++) {
    ms = ms * 1.15;
    element.textContent = possibilities[i];
    await timer(ms);
  }
}

async function highlight(element) {
  for (let i = 0; i < 7; i++) {
    if (i % 2 === 0) {
      element.style.color = '#fff';
    } else {
      element.style.color = '#424874';
    }
    await timer(200);
  }
}
