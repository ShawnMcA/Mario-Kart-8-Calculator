import { drivers } from './data/drivers.js';
import { bodies } from './data/bodies.js';
import { gliders } from './data/gliders.js';
import { tires } from './data/tires.js';

// Arrays of drivers, bodies, gliders, and tires
const driverList = drivers.map(driver => driver.name);
const bodyList = bodies.map(body => body.name);
const gliderList = gliders.map(glider => glider.name);
const tireList = tires.map(tire => tire.name);

// Current table 
const currentTable = {
  character: 'MarioIcon.png',
  body: 'Standard Kart',
  tires: 'Standard',
  glider: 'Super Glider'
}

// Next character
const changeCharRight = () => {
  let currChar = {};
  let newChar = {};

  currChar = getCurrentChar();
  newChar = getNextChar(currChar);
  currentTable.character = newChar.image;

  updateImage(currentTable.character);
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

// Get the next character
const getNextChar = currChar => {
    let index = drivers.indexOf(currChar);
    if(index ===  drivers.length - 1) return drivers[0];
    return drivers[index + 1];
}

// Get the previous character
const getPrevChar = currChar => {
  let index = drivers.indexOf(currChar);
  if(index ===  0) return drivers[drivers.length - 1];
  return drivers[index - 1];
}

// Update driver image url
const updateImage = currCharUrl => {
  document.getElementById('char-image').style.backgroundImage = `url(${currCharUrl})`;
}

// Update stats chart
const updateChart = () => {

}
 
// Prev character
const changeCharLeft = () => {
  let currChar = {};
  let newChar = {};

  currChar = getCurrentChar();
  newChar = getPrevChar(currChar);
  currentTable.character = newChar.image;

  updateImage(currentTable.character);
  updateChart();

}

// Event Listeners
document.getElementById('char-right').addEventListener('click', changeCharRight);
document.getElementById('char-left').addEventListener('click', changeCharLeft);
