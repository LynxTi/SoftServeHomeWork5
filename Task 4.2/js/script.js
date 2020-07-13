'use strict'

const answ = ['Яблоко','Банан','Ананас'].reduce((newArr,elem) => {
    if (elem == 'Ананас') {
        newArr.push(elem);
    }
    return newArr;
},[]);

console.log(answ);
