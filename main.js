import { drivers } from './data/drivers.js';
import { bodies } from './data/bodies.js';
import { gliders } from './data/gliders.js';
import { tires } from './data/tires.js';

import { chart } from '/stats.js';

// ========== Main App  ==========//

export let finalStats = [];

// Shows selection overlay
const showOverlay = () => {
  const overlay = document.getElementById('main-overlay');
  const mainApp = document.getElementById('main');

  window.addEventListener('mousedown', removeOverlay);

  mainApp.classList.toggle('blur');
  overlay.classList.toggle('hidden');
}

// Removes selection overlay
const removeOverlay = e => {
  const overlay = document.getElementById('main-overlay');
  const mainApp = document.getElementById('main');

  if(overlay.classList[0] !== 'hidden' && e.target.id !== 'overlay-menu' && e.target.id !== 'overlay') {
    updateCalculator(e);
    overlay.classList.toggle('hidden');
    mainApp.classList.toggle('blur');
    document.getElementById('overlay-menu').innerHTML = '';
    window.removeEventListener('mousedown', removeOverlay);
  }
}

// Updates the calculator information
const updateCalculator = e => {

  // Check through drivers
  drivers.forEach(driver => {
    if(driver.name === e.target.id){
      updateCharImage(driver.image);
      updateCharText(driver.name);
      updateStats();
      return;
    }
  });

  // Check through bodies
  bodies.forEach(body => {
    if(body.name === e.target.id){
      updateBodyImage(body.image);
      updateBodyText(body.name);
      updateStats();
      return;
    }
  });

  // Check through tires
  tires.forEach(tire => {
    if(tire.name === e.target.id){
      updateTiresImage(tire.image);
      updateTiresText(tire.name);
      updateStats();
      return;
    }
  });

  // Check through gliders
  gliders.forEach(glider => {
    if(glider.name === e.target.id){
      updateGliderImage(glider.image);
      updateGliderText(glider.name);
      updateStats();
      return;
    }
  });
}


// ========== Drivers ==========// 

// Displays next kart driver
const changeCharRight = () => {
  let currChar = {};
  let newChar = {};

  currChar = getCurrentChar();
  newChar = getNextChar(currChar);

  console.log(newChar);

  updateCharImage(newChar.image);
  updateCharText(newChar.name);
  updateStats();
}

// Displays previous kart driver
const changeCharLeft = () => {
  let currChar = {};
  let newChar = {};

  currChar = getCurrentChar();
  newChar = getPrevChar(currChar);

  console.log(newChar);

  updateCharImage(newChar.image);
  updateCharText(newChar.name);
  updateStats();
}

// Get the current character
const getCurrentChar = () => {
  const charImage = document.getElementById('char-image');
  let imgUrl = window.getComputedStyle(charImage).getPropertyValue('background-image');
  let currImage = imgUrl.split('/');
  let currIcon = currImage[currImage.length - 1].substring(0, currImage[currImage.length - 1].length - 2);
  let currentCharacter = drivers.filter(driver => driver.image === `/media/drivers/${currIcon}`);

  return currentCharacter[0];
}

// Get the next driver
const getNextChar = currChar => {
    let index = drivers.indexOf(currChar);
    if(index ===  drivers.length - 1) return drivers[0];
    return drivers[index + 1];
}

// Get the previous driver
const getPrevChar = currChar => {
  let index = drivers.indexOf(currChar);
  if(index ===  0) return drivers[drivers.length - 1];
  return drivers[index - 1];
}

// Update driver image url
const updateCharImage = currCharUrl => {
  document.getElementById('char-image').style.backgroundImage = `url(${currCharUrl})`;
}

// Updates kart driver text
const updateCharText = currChar => {
  const charText = document.getElementById('char-name');

  charText.innerHTML = currChar; 
}

// Fills the overlay grid with drivers
const fillCharGrid = () => {
  const overlay = document.getElementById('overlay-menu');

  drivers.forEach(driver => {
    const driverDiv = document.createElement('div');
    driverDiv.className = 'modal-image';
    driverDiv.id = driver.name;
    let styles = `background-image: url(${driver.image});background-repeat: no-repeat; background-size: contain;`;
    console.log(driver.image);
    driverDiv.setAttribute('style', styles);
    overlay.appendChild(driverDiv);
  })
}

// ========== Kart Bodies ==========// 

// Displays next kart body
const changeBodyRight = () => {
  let currBody = {};
  let newBody = {};

  currBody = getCurrentBody();
  newBody = getNextBody(currBody);

  console.log(newBody);

  updateBodyImage(newBody.image);
  updateBodyText(newBody.name);
  updateStats();
}

// Displays previous kart body
const changeBodyLeft = () => {
  let currBody = {};
  let newBody = {};

  currBody = getCurrentBody();
  newBody = getPrevBody(currBody);

  console.log(newBody);

  updateBodyImage(newBody.image);
  updateBodyText(newBody.name);
  updateStats();
}

// Get the current kart body
const getCurrentBody = () => {
  const bodyImage = document.getElementById('body-image');
  let imgUrl = window.getComputedStyle(bodyImage).getPropertyValue('background-image');
  let currImage = imgUrl.split('/');
  let currIcon = currImage[currImage.length - 1].substring(0, currImage[currImage.length - 1].length - 2);
  let currentBody = bodies.filter(body => body.image === `/media/bodies/${currIcon}`);

  return currentBody[0];
}

// Get the next kart body
const getNextBody = currBody => {
    let index = bodies.indexOf(currBody);
    if(index ===  bodies.length - 1) return bodies[0];
    return bodies[index + 1];
}

// Get the previous kart body
const getPrevBody = currBody => {
  let index = bodies.indexOf(currBody);
  if(index ===  0) return bodies[bodies.length - 1];
  return bodies[index - 1];
}

// Update kart body image url
const updateBodyImage = currBodyUrl => {
  document.getElementById('body-image').style.backgroundImage = `url(${currBodyUrl})`;
}

// Updates kart body text
const updateBodyText = currBody => {
  const bodyText = document.getElementById('body-name');

  bodyText.innerHTML = currBody; 
}

// Fills the overlay grid with kart bodies
const fillBodyGrid = () => {
  const overlay = document.getElementById('overlay-menu');

  bodies.forEach(body => {
    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'modal-image';
    bodyDiv.id = body.name;
    let styles = `background-image: url(${body.image});background-repeat: no-repeat; background-size: contain;`;
    console.log(body.image);
    bodyDiv.setAttribute('style', styles);
    overlay.appendChild(bodyDiv);
  })
}
 

// ========== Kart Tires ==========// 

// Displays next kart tires
const changeTiresRight = () => {
  let currTires = {};
  let newTires = {};

  currTires = getCurrentTires();
  newTires = getNextTires(currTires);

  console.log(newTires);

  updateTiresImage(newTires.image);
  updateTiresText(newTires.name);
  updateStats();
}

// Displays previous kart tires
const changeTiresLeft = () => {
  let currTires = {};
  let newTires = {};

  currTires = getCurrentTires();
  newTires = getPrevTires(currTires);

  console.log(newTires);

  updateTiresImage(newTires.image);
  updateTiresText(newTires.name);
  updateStats();
}

// Get the current kart tires
const getCurrentTires = () => {
  const tiresImage = document.getElementById('tires-image');
  let imgUrl = window.getComputedStyle(tiresImage).getPropertyValue('background-image');
  let currImage = imgUrl.split('/');
  let currIcon = currImage[currImage.length - 1].substring(0, currImage[currImage.length - 1].length - 2);
  let currentTires = tires.filter(tire => tire.image === `/media/tires/${currIcon}`);

  return currentTires[0];
}

// Get the next kart tires
const getNextTires = currTires => {
    let index = tires.indexOf(currTires);
    if(index ===  tires.length - 1) return tires[0];
    return tires[index + 1];
}

// Get the previous kart tires
const getPrevTires = currTires => {
  let index = tires.indexOf(currTires);
  if(index ===  0) return tires[tires.length - 1];
  return tires[index - 1];
}

// Update kart tires image url
const updateTiresImage = currTiresUrl => {
  document.getElementById('tires-image').style.backgroundImage = `url(${currTiresUrl})`;
}

// Updates kart tires text
const updateTiresText = currTires => {
  const tiresText = document.getElementById('tires-name');

  tiresText.innerHTML = currTires; 
}

// Fills the overlay grid with kart tires
const fillTiresGrid = () => {
  const overlay = document.getElementById('overlay-menu');

  tires.forEach(tire => {
    const tireDiv = document.createElement('div');
    tireDiv.className = 'modal-image';
    tireDiv.id = tire.name;
    let styles = `background-image: url(${tire.image});background-repeat: no-repeat; background-size: contain;`;
    console.log(tire.image);
    tireDiv.setAttribute('style', styles);
    overlay.appendChild(tireDiv);
  })
}

// ========== Gliders ==========//

// Displays next kart glider
const changeGliderRight = () => {
  let currGlider = {};
  let newGlider = {};

  currGlider = getCurrentGlider();
  newGlider = getNextGlider(currGlider);

  console.log(newGlider);

  updateGliderImage(newGlider.image);
  updateGliderText(newGlider.name);
  updateStats();
}

// Displays previous kart glider
const changeGliderLeft = () => {
  let currGlider = {};
  let newGlider = {};

  currGlider = getCurrentGlider();
  newGlider = getPrevGlider(currGlider);

  console.log(newGlider);

  updateGliderImage(newGlider.image);
  updateGliderText(newGlider.name);
  updateStats();
}

// Get the current kart glider
const getCurrentGlider = () => {
  const gliderImage = document.getElementById('glider-image');
  let imgUrl = window.getComputedStyle(gliderImage).getPropertyValue('background-image');
  let currImage = imgUrl.split('/');
  let currIcon = currImage[currImage.length - 1].substring(0, currImage[currImage.length - 1].length - 2);
  let currentGlider = gliders.filter(glider => glider.image === `/media/gliders/${currIcon}`);

  return currentGlider[0];
}

// Get the next kart glider
const getNextGlider = currGlider => {
    let index = gliders.indexOf(currGlider);
    if(index ===  gliders.length - 1) return gliders[0];
    return gliders[index + 1];
}

// Get the previous kart glider
const getPrevGlider = currGlider => {
  let index = gliders.indexOf(currGlider);
  if(index ===  0) return gliders[gliders.length - 1];
  return gliders[index - 1];
}

// Update kart glider image url
const updateGliderImage = currGliderUrl => {
  document.getElementById('glider-image').style.backgroundImage = `url(${currGliderUrl})`;
}

// Updates kart glider text
const updateGliderText = currGlider => {
  const gliderText = document.getElementById('glider-name');

  gliderText.innerHTML = currGlider; 
}

// Fills the overlay grid with gliders
const fillGliderGrid = () => {
  const overlay = document.getElementById('overlay-menu');

  gliders.forEach(glider => {
    const gliderDiv = document.createElement('div');
    gliderDiv.className = 'modal-image';
    gliderDiv.id = glider.name;
    let styles = `background-image: url(${glider.image});background-repeat: no-repeat; background-size: contain;`;
    console.log(glider.image);
    gliderDiv.setAttribute('style', styles);
    overlay.appendChild(gliderDiv);
  })
}

// ========== Stats ==========//

// Update stats
export const updateStats = () => {
  let driverStats = getCurrentChar();
  let bodyStats = getCurrentBody();
  let tiresStats = getCurrentTires();
  let gliderStats = getCurrentGlider();


/*
  Final Stats:
  1. groundSpeed
  2. airSpeed
  3. waterSpeed
  4. antiGravitySpeed
  5. acceleration
  6. weight
  7. groundHandling
  8. airHandling
  9. waterHandling
  10. antiGravityHandling
  11. onRoadTraction
  12. offRoadTraction
  13. miniTurbo 
*/

  finalStats = [
    calculateStats([driverStats.groundSpeed, bodyStats.groundSpeed, tiresStats.groundSpeed, gliderStats.groundSpeed]),
    calculateStats([driverStats.airSpeed, bodyStats.airSpeed, tiresStats.airSpeed, gliderStats.airSpeed]),
    calculateStats([driverStats.waterSpeed, bodyStats.waterSpeed, tiresStats.waterSpeed, gliderStats.waterSpeed]),
    calculateStats([driverStats.antiGravitySpeed, bodyStats.antiGravitySpeed, tiresStats.antiGravitySpeed, gliderStats.antiGravitySpeed]),
    calculateStats([driverStats.acceleration, bodyStats.acceleration, tiresStats.acceleration, gliderStats.acceleration]),
    calculateStats([driverStats.weight, bodyStats.weight, tiresStats.weight, gliderStats.weight]),
    calculateStats([driverStats.groundHandling, bodyStats.groundHandling, tiresStats.groundHandling, gliderStats.groundHandling]),
    calculateStats([driverStats.airHandling, bodyStats.airHandling, tiresStats.airHandling, gliderStats.airHandling]),
    calculateStats([driverStats.waterHandling, bodyStats.waterHandling, tiresStats.waterHandling, gliderStats.waterHandling]),
    calculateStats([driverStats.antiGravityHandling, bodyStats.antiGravityHandling, tiresStats.antiGravityHandling, gliderStats.antiGravityHandling]),
    calculateStats([driverStats.onRoadTraction, bodyStats.onRoadTraction, tiresStats.onRoadTraction, gliderStats.onRoadTraction]),
    calculateStats([driverStats.offRoadTraction, bodyStats.offRoadTraction, tiresStats.offRoadTraction, gliderStats.offRoadTraction]),
    calculateStats([driverStats.miniTurbo, bodyStats.miniTurbo, tiresStats.miniTurbo, gliderStats.miniTurbo])
  ];

  console.log(`Final Stats: ${finalStats}`);

  chart.updateSeries([{ data: finalStats }]);
};

// Calulates the average stats based on in-game calculation (tot + 3) / 4
const calculateStats = stats => {
  return (stats.reduce((acc, curr) => acc + curr) + 3) / 4;
}



// ========== Event Listeners ==========//
// Driver event listeners
document.getElementById('char-right').addEventListener('click', changeCharRight);
document.getElementById('char-left').addEventListener('click', changeCharLeft);
document.getElementById('char-image').addEventListener('click', () => {
  showOverlay();
  fillCharGrid();
});

// Body event listeners
document.getElementById('body-right').addEventListener('click', changeBodyRight);
document.getElementById('body-left').addEventListener('click', changeBodyLeft);
document.getElementById('body-image').addEventListener('click', () => {
  showOverlay();
  fillBodyGrid();
});

// Tires event listeners
document.getElementById('tires-right').addEventListener('click', changeTiresRight);
document.getElementById('tires-left').addEventListener('click', changeTiresLeft);
document.getElementById('tires-image').addEventListener('click', () => {
  showOverlay();
  fillTiresGrid();
});

// Glider event listeners
document.getElementById('glider-right').addEventListener('click', changeGliderRight);
document.getElementById('glider-left').addEventListener('click', changeGliderLeft);
document.getElementById('glider-image').addEventListener('click', () => {
  showOverlay();
  fillGliderGrid();
});

// Main event listeners
window.onload = function() {
  updateStats();
}