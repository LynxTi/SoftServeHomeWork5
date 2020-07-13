'use strict'

function lineStatistics (someLine) {
  let numberCounter = 0;
  let symbolCounter = 0;
  let letterCounter = 0;
 
  const chars = someLine.split('').filter(char => char !=' ');

  for (const char of chars) {
    switch (true) {
      case !isNaN(char):
        numberCounter++;
        break;

      case /[a-z]/i.test(char):
        letterCounter++;
        break;
    
      default:
        symbolCounter++;
        break;
    }
  }
  
    const answ = `Letter = ${letterCounter}; Number = ${numberCounter}; Symbol = ${symbolCounter};`

    return answ;
}

console.log(lineStatistics('qwe11ss @@  123Mbn'));
