'use strict'

function lineStatistics (someLine) {

  const chars = someLine.split('').map(char => {;

    switch (true) {
      case !isNaN(char):
        return '_'
        break;

      case /[a-z]/.test(char):
        return char.toUpperCase();

      case /[A-Z]/.test(char):
        return char.toLowerCase();
        
      default:
        return char
    }
  });
  
    const answ = chars.reduce((a,b) => a+b);

    return answ;
}

console.log(lineStatistics('as12RTvc  1 c 3 D'));
