'use strict'

function dnaChain (dna) {
  const firstDnaChain = dna;
  // const dnaqLen = dna.length;
// console.log(firstDnaChain.split(''));

  let secondDnaChain = firstDnaChain.split('').reduce( (newArr, elem) => {
    // console.log(newArr + elem);
    
    switch (true) {      
      case elem === 'A':
        newArr.push('T');
        break;

      case elem == 'T':
        newArr.push('A');
        
        break;

      case elem == 'C':
        newArr.push('G');
        
        break;

      case elem == 'G':
        newArr.push('C');
        
        break;
    
      default:
        console.log('-1')
        break;
    }
     return newArr;
  }, []);
  //   switch (true) {      
  //     case elem === 'A':
  //       newArr + 'T';
  //       break;

  //     case elem == 'T':
  //       newArr + 'A';
        
  //       break;

  //     case elem == 'C':
  //       newArr + 'G';
        
  //       break;

  //     case elem == 'G':
  //       newArr + 'C';
        
  //       break;
    
  //     default:
  //       console.log('-1')
  //       break;
  //   }
  //    return newArr;
  // }, '');

  secondDnaChain = secondDnaChain.reduce((a,b) => a + b);
  return secondDnaChain;
}

dnaChain('TAACG');