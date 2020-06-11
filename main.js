import { drivers } from './data/drivers.js';

// Array of drivers
const characters = drivers.map(driver => driver.name);

// Current table 
const currentTable = {
  character: 'Mario',
  body: 'Standard Kart',
  tires: 'Standard',
  glider: 'Super Glider'
}

// Next character
const changeCharRight = () => {

  // =========== TESTING ============= //
  /*
  const charImage = document.getElementById('char-image');
  let luigi = null;

  for(let i in drivers) {
    if (drivers[i].name === characters[1]) luigi = drivers[i];
  }

  charImage.style.backgroundImage = `url(${luigi.image})`;
  */
  

  // =========== TODO: UPDATE FUNCTIONS ============= //
  /*
  const char = '';
  const newChar = '';

  char = getCurrentChar();
  newChar = nextCharacter(char);
  currentTable.character = newchar;
  updateImage(currentTable.character);
  updateChart();
  */
}

// Prev character
const changeCharLeft = () => {

  // =========== TESTING ============= //
  /*
  const charImage = document.getElementById('char-image');
  let mario = null;

  for(let i in drivers) {
    if (drivers[i].name === characters[0]) mario = drivers[i];
  } 

  charImage.style.backgroundImage =  `url(${mario.image})`;
  */

  // =========== TODO: UPDATE FUNCTIONS ============= //
  /*
  const char = '';
  const newChar = '';

  char = getCurrentChar();
  newChar = prevCharacter(char);
  currentTable.character = newchar;
  updateImage(currentTable.character);
  updateChart();
  */
}

// Event Listeners
document.getElementById('char-right').addEventListener('click', changeCharRight);
document.getElementById('char-left').addEventListener('click', changeCharLeft);
