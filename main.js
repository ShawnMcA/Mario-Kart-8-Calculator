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

// Current table 
const currentTable = {
  character: 'MarioIcon.png',
  body: 'StandardKartIcon.png',
  tires: 'StandardIcon.png',
  glider: 'SuperGliderIcon.png'
}

// ========== Drivers ==========// 

// Displays next kart driver
const changeCharRight = () => {
  let currChar = {};
  let newChar = {};

  currChar = getCurrentChar();
  newChar = getNextChar(currChar);
  currentTable.character = newChar.image;

  console.log(newChar);

  updateCharImage(currentTable.character);
  updateChart();
}

// Displays previous kart driver
const changeCharLeft = () => {
  let currChar = {};
  let newChar = {};

  currChar = getCurrentChar();
  newChar = getPrevChar(currChar);
  currentTable.character = newChar.image;

  console.log(newChar);

  updateCharImage(currentTable.character);
  updateChart();
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
  currentTable.body = newBody.image;

  console.log(newBody);

  updateBodyImage(currentTable.body);
  updateChart();
}

// Displays previous kart body
const changeBodyLeft = () => {
  let currBody = {};
  let newBody = {};

  currBody = getCurrentBody();
  newBody = getPrevBody(currBody);
  currentTable.body = newBody.image;

  console.log(newBody);

  updateBodyImage(currentTable.body);
  updateChart();
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

// Displays next kart body
/*
const changeBodyRight = () => {
  let currBody = {};
  let newBody = {};

  currBody = getCurrentBody();
  newBody = getNextBody(currBody);
  currentTable.body = newBody.image;

  updateBodyImage(currentTable.body);
  updateChart();
}

// Displays previous kart body
const changeBodyLeft = () => {
  let currBody = {};
  let newBody = {};

  currBody = getCurrentBody();
  newBody = getPrevBody(currBody);
  currentTable.body = newBody.image;

  updateBodyImage(currentTable.body);
  updateChart();
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
*/

// ========== Gliders ==========//

// Displays next kart body
/*
const changeBodyRight = () => {
  let currBody = {};
  let newBody = {};

  currBody = getCurrentBody();
  newBody = getNextBody(currBody);
  currentTable.body = newBody.image;

  updateBodyImage(currentTable.body);
  updateChart();
}

// Displays previous kart body
const changeBodyLeft = () => {
  let currBody = {};
  let newBody = {};

  currBody = getCurrentBody();
  newBody = getPrevBody(currBody);
  currentTable.body = newBody.image;

  updateBodyImage(currentTable.body);
  updateChart();
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
*/

// ========== Stats ==========//

// Update stats
const updateChart = () => {

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