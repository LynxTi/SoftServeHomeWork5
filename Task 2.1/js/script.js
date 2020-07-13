'use strict'

 function convertingNumber (num) {

   if (num > 9 && num <100) {
    const convertNum = num < 20? convertNumberSmallerTwenty(num) : ConvertNumberGreaterTwenty(num);
    return convertNum;
   } else {
     return 'Incorrect data';
   }

  function convertNumberSmallerTwenty(num) {
  const numbers = {
    10: 'Десять',
    11: 'Одинадцать',
    12: 'Двенадцать',
    13: 'Тринадцать',
    14: 'Четырнадццать',
    15: 'Пятнадцать',
    16: 'Шестьнадцать',
    17: 'Семьнадцать',
    18: 'Восемнадцать',
    19: 'Девятнадцать'
  };

  return numbers[num];
  }

  function ConvertNumberGreaterTwenty(num) {
    const toTen  = {
      1: " один",
      2: " два",
      3: " три",
      4: " четыре",
      5: " пять",
      6: " шеть",
      7: " семь",
      8: " восемь",
      9: " девять",
    };
    const decimalNumbers = {
      20: 'двадцать',
      30: 'тридцать',
      40: 'сорок',
      50: 'пятдесят',
      60: 'шисдесят',
      70: 'семдесят',
      80: 'восемдесят',
      90: 'девяносто',
    }

    const secondNum = num % 10;
    const firstNum = num - secondNum;

    const rezalt = secondNum !== 0? decimalNumbers[firstNum] + toTen[secondNum]: decimalNumbers[firstNum];
    return rezalt;
  }

}

console.log(convertingNumber(77));
