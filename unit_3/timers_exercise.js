/**
    Countdown,
    accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it.
    Once the value is 0 it logs “DONE!” and finish.
*/

function countdown(num) {
  const setIntervalId = setInterval(() => {
    num = num - 1;
    if (num === 0) {
      console.log('DONE!');
      return clearInterval(setIntervalId);
    }
    console.log(num);
  }, 1000);
}

// countdown(4);

/**
    RandomGame,
    selects a random number between 0 and 1 every 1000 milliseconds.
    If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.
*/

function randomGame() {
  let counter = 0;
  const setIntervalId = setInterval(() => {
    const randNum = toFixed(Math.random(), 2);
    console.log(randNum);
    if (randNum > 0.75) {
      console.log(
        `It took ${counter} tries to find a number greater than 0.75`
      );
      return clearInterval(setIntervalId);
    }
    counter += 1;
  }, 1000);
}

function toFixed(number, numOfDec) {
  numOfDec = Math.pow(10, numOfDec > 0 ? numOfDec : 0);
  return parseInt(number * numOfDec) / numOfDec;
}

randomGame();
