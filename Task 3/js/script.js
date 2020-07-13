'use strict'

const button = document.querySelector('.button');
const lights = document.querySelectorAll('.trafficLight');
const colors = ['green','yellow','red'];
const lightsLen = colors.length;


button.addEventListener('click',turnOnTrafficLights); 

for (let i = 0; i < lightsLen; i++) {
  lights[i].dataset.color = colors[i];
  i == 0? lights[i].dataset.turnOn = 1: lights[i].dataset.turnOn = 0;  
}

function turnOnTrafficLights() {
  for (let i = 0; i < lightsLen; i++) {
    lights[i].style.backgroundColor = 'lightgray'; /* Временый вариант*/ 
  }
    let index = removeColor();

    lights[index].style.backgroundColor = lights[index].dataset.color;
    index + 1 < lightsLen ? lights[index + 1].dataset.turnOn = 1 :lights[0].dataset.turnOn = 1; 

  function removeColor () {
    for (let i = 0; i < lightsLen; i++) {

      if (+lights[i].dataset.turnOn) {
        lights[i].style.backgroundColor = 'lightgray';
        lights[i].dataset.turnOn = 0;

        return i;
      }
    }
  }
}
