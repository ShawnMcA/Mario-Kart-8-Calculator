import { drivers } from './data/drivers.js';
import { bodies } from './data/bodies.js';
import { gliders } from './data/gliders.js';
import { tires } from './data/tires.js';

// ========== Main App  ==========//

// Arrays of drivers, bodies, gliders, and tires
const driverList = drivers.map(driver => driver.name);
const bodyList = bodies.map(body => body.name);
const gliderList = gliders.map(glider => glider.name);
const tireList = tires.map(tire => tire.name);

// ========== Drivers ==========// 

// Displays next kart driver
const changeCharRight = () => {
  let currChar = {};
  let newChar = {};

  currChar = getCurrentChar();
  newChar = getNextChar(currChar);

  console.log(newChar);

  updateCharImage(newChar.image);
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

// ========== Kart Bodies ==========// 

// Displays next kart body
const changeBodyRight = () => {
  let currBody = {};
  let newBody = {};

  currBody = getCurrentBody();
  newBody = getNextBody(currBody);

  console.log(newBody);

  updateBodyImage(newBody.image);
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
 

// ========== Kart Tires ==========// 

// Displays next kart tires
const changeTiresRight = () => {
  let currTires = {};
  let newTires = {};

  currTires = getCurrentTires();
  newTires = getNextTires(currTires);

  console.log(newTires);

  updateTiresImage(newTires.image);
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

// ========== Gliders ==========//

// Displays next kart glider
const changeGliderRight = () => {
  let currGlider = {};
  let newGlider = {};

  currGlider = getCurrentGlider();
  newGlider = getNextGlider(currGlider);

  console.log(newGlider);

  updateGliderImage(newGlider.image);
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

// ========== Stats ==========//

// Update stats
const updateStats = () => {
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

  let finalStats = [
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
}

const calculateStats = stats => {
  return (stats.reduce((acc, curr) => acc + curr) + 3) / 4;
}

// ========== Event Listeners ==========//
document.getElementById('char-right').addEventListener('click', changeCharRight);
document.getElementById('char-left').addEventListener('click', changeCharLeft);

document.getElementById('body-right').addEventListener('click', changeBodyRight);
document.getElementById('body-left').addEventListener('click', changeBodyLeft);

document.getElementById('tires-right').addEventListener('click', changeTiresRight);
document.getElementById('tires-left').addEventListener('click', changeTiresLeft);

document.getElementById('glider-right').addEventListener('click', changeGliderRight);
document.getElementById('glider-left').addEventListener('click', changeGliderLeft);