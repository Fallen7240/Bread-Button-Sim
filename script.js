let money = 0;
let multi = 1;
let rebirth = 1;
let ascension = 1;
let multiAmount1 = 1,
  multiAmount2 = 5,
  multiAmount3 = 10,
  multiAmount4 = 25,
  multiAmount5 = 50,
  multiAmount6 = 150,
  multiAmount7 = 250,
  multiAmount8 = 500,
  multiAmount9 = 750,
  multiAmount10 = 1000;

let rebirthAmount1 = 1,
  rebirthAmount2 = 5,
  rebirthAmount3 = 10,
  rebirthAmount4 = 25,
  rebirthAmount5 = 50,
  rebirthAmount6 = 150,
  rebirthAmount7 = 250,
  rebirthAmount8 = 500,
  rebirthAmount9 = 750,
  rebirthAmount10 = 1000;

let ascensionAmount1 = 1,
  ascensionAmount2 = 5,
  ascensionAmount3 = 10,
  ascensionAmount4 = 25,
  ascensionAmount5 = 50,
  ascensionAmount6 = 150,
  ascensionAmount7 = 250,
  ascensionAmount8 = 500,
  ascensionAmount9 = 750,
  ascensionAmount10 = 1000;

let multiPrice1 = 5,
  multiPrice2 = 25,
  multiPrice3 = 250,
  multiPrice4 = 2500,
  multiPrice5 = 5000,
  multiPrice6 = 12500,
  multiPrice7 = 25000,
  multiPrice8 = 37500,
  multiPrice9 = 50000,
  multiPrice10 = 125000;

let rebirthPrice1 = 100,
  rebirthPrice2 = 500,
  rebirthPrice3 = 5000,
  rebirthPrice4 = 10000,
  rebirthPrice5 = 25000,
  rebirthPrice6 = 35000,
  rebirthPrice7 = 50000,
  rebirthPrice8 = 65000,
  rebirthPrice9 = 75000,
  rebirthPrice10 = 100000;

let ascensionPrice1 = 100,
  ascensionPrice2 = 500,
  ascensionPrice3 = 5000,
  ascensionPrice4 = 10000,
  ascensionPrice5 = 25000,
  ascensionPrice6 = 35000,
  ascensionPrice7 = 50000,
  ascensionPrice8 = 65000,
  ascensionPrice9 = 75000,
  ascensionPrice10 = 100000;

let multiUpgrade1Bought = 0,
  multiUpgrade2Bought = 0,
  multiUpgrade3Bought = 0,
  multiUpgrade4Bought = 0,
  multiUpgrade5Bought = 0,
  multiUpgrade6Bought = 0,
  multiUpgrade7Bought = 0,
  multiUpgrade8Bought = 0,
  multiUpgrade9Bought = 0,
  multiUpgrade10Bought = 0;

let rebirthUpgrade1Bought = 0,
  rebirthUpgrade2Bought = 0,
  rebirthUpgrade3Bought = 0,
  rebirthUpgrade4Bought = 0,
  rebirthUpgrade5Bought = 0,
  rebirthUpgrade6Bought = 0,
  rebirthUpgrade7Bought = 0,
  rebirthUpgrade8Bought = 0,
  rebirthUpgrade9Bought = 0,
  rebirthUpgrade10Bought = 0;

let ascensionUpgrade1Bought = 0,
  ascensionUpgrade2Bought = 0,
  ascensionUpgrade3Bought = 0,
  ascensionUpgrade4Bought = 0,
  ascensionUpgrade5Bought = 0,
  ascensionUpgrade6Bought = 0,
  ascensionUpgrade7Bought = 0,
  ascensionUpgrade8Bought = 0,
  ascensionUpgrade9Bought = 0,
  ascensionUpgrade10Bought = 0;

//Rebirth Reset
function rebirthReset() {
  multi = 1;
  multiAmount1 = 1;
  multiAmount2 = 5;
  multiAmount3 = 10;
  multiAmount4 = 25;
  multiAmount5 = 50;
  multiAmount6 = 150;
  multiAmount7 = 250;
  multiAmount8 = 500;
  multiAmount9 = 750;
  multiAmount10 = 1000;
  multiPrice1 = 5;
  multiPrice2 = 25;
  multiPrice3 = 250;
  multiPrice4 = 2500;
  multiPrice5 = 5000;
  multiPrice6 = 12500;
  multiPrice7 = 25000;
  multiPrice8 = 37500;
  multiPrice9 = 50000;
  multiPrice10 = 125000;
  multiAmount1 *= rebirth;
  multiAmount2 *= rebirth;
  multiAmount3 *= rebirth;
  multiAmount4 *= rebirth;
  multiAmount5 *= rebirth;
  multiAmount6 *= rebirth;
  multiAmount7 *= rebirth;
  multiAmount8 *= rebirth;
  multiAmount9 *= rebirth;
  multiAmount10 *= rebirth;
  updateUI();
  saveGame();
}
//Ascension Reset
function ascensionReset() {
  rebirth = 1;
  rebirthAmount1 = 1;
  rebirthAmount2 = 5;
  rebirthAmount3 = 15;
  rebirthAmount4 = 50;
  rebirthAmount5 = 100;
  rebirthAmount6 = 150;
  rebirthAmount7 = 250;
  rebirthAmount8 = 500;
  rebirthAmount9 = 750;
  rebirthAmount10 = 1000;
  rebirthPrice1 = 100;
  rebirthPrice2 = 500;
  rebirthPrice3 = 5000;
  rebirthPrice4 = 10000;
  rebirthPrice5 = 25000;
  rebirthPrice6 = 35000;
  rebirthPrice7 = 50000;
  rebirthPrice8 = 65000;
  rebirthPrice9 = 75000;
  rebirthPrice10 = 100000;
  rebirthAmount1 *= ascension;
  rebirthAmount2 *= ascension;
  rebirthAmount3 *= ascension;
  rebirthAmount4 *= ascension;
  rebirthAmount5 *= ascension;
  rebirthAmount6 *= ascension;
  rebirthAmount7 *= ascension;
  rebirthAmount8 *= ascension;
  rebirthAmount9 *= ascension;
  rebirthAmount10 *= ascension;

  updateUI();
  saveGame();
}

function updateUI() {
  document.getElementById('money').innerHTML =
    Math.floor(money).toLocaleString();
  document.getElementById('multi').innerHTML =
    Math.floor(multi).toLocaleString();
  document.getElementById('rebirth').innerHTML =
    Math.floor(rebirth).toLocaleString();
  document.getElementById('ascension').innerHTML =
    Math.floor(ascension).toLocaleString();

  // Update Multi Buttons and Prices
  document.getElementById('multiAmount1').innerHTML =
    Math.floor(multiAmount1).toLocaleString();
  document.getElementById('multiAmount2').innerHTML =
    Math.floor(multiAmount2).toLocaleString();
  document.getElementById('multiAmount3').innerHTML =
    Math.floor(multiAmount3).toLocaleString();
  document.getElementById('multiAmount4').innerHTML =
    Math.floor(multiAmount4).toLocaleString();
  document.getElementById('multiAmount5').innerHTML =
    Math.floor(multiAmount5).toLocaleString();
  document.getElementById('multiAmount6').innerHTML =
    Math.floor(multiAmount6).toLocaleString();
  document.getElementById('multiAmount7').innerHTML =
    Math.floor(multiAmount7).toLocaleString();
  document.getElementById('multiAmount8').innerHTML =
    Math.floor(multiAmount8).toLocaleString();
  document.getElementById('multiAmount9').innerHTML =
    Math.floor(multiAmount9).toLocaleString();
  document.getElementById('multiAmount10').innerHTML =
    Math.floor(multiAmount10).toLocaleString();

  document.getElementById('multiPrice1').innerHTML =
    Math.floor(multiPrice1).toLocaleString();
  document.getElementById('multiPrice2').innerHTML =
    Math.floor(multiPrice2).toLocaleString();
  document.getElementById('multiPrice3').innerHTML =
    Math.floor(multiPrice3).toLocaleString();
  document.getElementById('multiPrice4').innerHTML =
    Math.floor(multiPrice4).toLocaleString();
  document.getElementById('multiPrice5').innerHTML =
    Math.floor(multiPrice5).toLocaleString();
  document.getElementById('multiPrice6').innerHTML =
    Math.floor(multiPrice6).toLocaleString();
  document.getElementById('multiPrice7').innerHTML =
    Math.floor(multiPrice7).toLocaleString();
  document.getElementById('multiPrice8').innerHTML =
    Math.floor(multiPrice8).toLocaleString();
  document.getElementById('multiPrice9').innerHTML =
    Math.floor(multiPrice9).toLocaleString();
  document.getElementById('multiPrice10').innerHTML =
    Math.floor(multiPrice10).toLocaleString();

  // Update Rebirth Buttons and Prices
  document.getElementById('rebirthAmount1').innerHTML =
    Math.floor(rebirthAmount1).toLocaleString();
  document.getElementById('rebirthAmount2').innerHTML =
    Math.floor(rebirthAmount2).toLocaleString();
  document.getElementById('rebirthAmount3').innerHTML =
    Math.floor(rebirthAmount3).toLocaleString();
  document.getElementById('rebirthAmount4').innerHTML =
    Math.floor(rebirthAmount4).toLocaleString();
  document.getElementById('rebirthAmount5').innerHTML =
    Math.floor(rebirthAmount5).toLocaleString();
  document.getElementById('rebirthAmount6').innerHTML =
    Math.floor(rebirthAmount6).toLocaleString();
  document.getElementById('rebirthAmount7').innerHTML =
    Math.floor(rebirthAmount7).toLocaleString();
  document.getElementById('rebirthAmount8').innerHTML =
    Math.floor(rebirthAmount8).toLocaleString();
  document.getElementById('rebirthAmount9').innerHTML =
    Math.floor(rebirthAmount9).toLocaleString();
  document.getElementById('rebirthAmount10').innerHTML =
    Math.floor(rebirthAmount10).toLocaleString();
  document.getElementById('rebirthPrice1').innerHTML =
    Math.floor(rebirthPrice1).toLocaleString();
  document.getElementById('rebirthPrice2').innerHTML =
    Math.floor(rebirthPrice2).toLocaleString();
  document.getElementById('rebirthPrice3').innerHTML =
    Math.floor(rebirthPrice3).toLocaleString();
  document.getElementById('rebirthPrice4').innerHTML =
    Math.floor(rebirthPrice4).toLocaleString();
  document.getElementById('rebirthPrice5').innerHTML =
    Math.floor(rebirthPrice5).toLocaleString();
  document.getElementById('rebirthPrice6').innerHTML =
    Math.floor(rebirthPrice6).toLocaleString();
  document.getElementById('rebirthPrice7').innerHTML =
    Math.floor(rebirthPrice7).toLocaleString();
  document.getElementById('rebirthPrice8').innerHTML =
    Math.floor(rebirthPrice8).toLocaleString();
  document.getElementById('rebirthPrice9').innerHTML =
    Math.floor(rebirthPrice9).toLocaleString();
  document.getElementById('rebirthPrice10').innerHTML =
    Math.floor(rebirthPrice10).toLocaleString();

  // Update Ascension Buttons and Prices
  document.getElementById('ascensionPrice1').innerHTML =
    Math.floor(ascensionPrice1).toLocaleString();
  document.getElementById('ascensionPrice2').innerHTML =
    Math.floor(ascensionPrice2).toLocaleString();
  document.getElementById('ascensionPrice3').innerHTML =
    Math.floor(ascensionPrice3).toLocaleString();
  document.getElementById('ascensionPrice4').innerHTML =
    Math.floor(ascensionPrice4).toLocaleString();
  document.getElementById('ascensionPrice5').innerHTML =
    Math.floor(ascensionPrice5).toLocaleString();
  document.getElementById('ascensionPrice6').innerHTML =
    Math.floor(ascensionPrice6).toLocaleString();
  document.getElementById('ascensionPrice7').innerHTML =
    Math.floor(ascensionPrice7).toLocaleString();
  document.getElementById('ascensionPrice8').innerHTML =
    Math.floor(ascensionPrice8).toLocaleString();
  document.getElementById('ascensionPrice9').innerHTML =
    Math.floor(ascensionPrice9).toLocaleString();
  document.getElementById('ascensionPrice10').innerHTML =
    Math.floor(ascensionPrice10).toLocaleString();

  //other UIs
  buttonUI();
  scoreUI();
}

//Show scores
function scoreUI() {
  //Multi Score
  if (money >= 5) {
    document.getElementById('score2').style.display = 'block';
  }
  //Rebirth Score
  if (multi >= 50) {
    document.getElementById('score3').style.display = 'block';
  }
  //Ascension Score
  if (rebirth >= 50) {
    document.getElementById('score4').style.display = 'block';
  }
}

//show buttons
function buttonUI() {
  // Multi Buttons
  if (money >= 5) {
    document.getElementById('multiButton1').style.display = 'block';
  }

  if (money >= 20) {
    document.getElementById('multiButton2').style.display = 'block';
  }

  if (money >= 200) {
    document.getElementById('multiButton3').style.display = 'block';
  }

  if (rebirth >= 2) {
    document.getElementById('multiButton4').style.display = 'block';
  }

  if (rebirth >= 5) {
    document.getElementById('multiButton5').style.display = 'block';
  }

  if (rebirth >= 6) {
    document.getElementById('multiButton6').style.display = 'block';
  }

  if (rebirth >= 7) {
    document.getElementById('multiButton7').style.display = 'block';
  }

  if (rebirth >= 8) {
    document.getElementById('multiButton8').style.display = 'block';
  }

  if (rebirth >= 9) {
    document.getElementById('multiButton9').style.display = 'block';
  }

  if (rebirth >= 10) {
    document.getElementById('multiButton10').style.display = 'block';
  }

  // Rebirth Buttons
  if (multi >= 50) {
    document.getElementById('rebirthButton1').style.display = 'block';
  }

  if (multi >= 250) {
    document.getElementById('rebirthButton2').style.display = 'block';
  }

  if (multi >= 2500) {
    document.getElementById('rebirthButton3').style.display = 'block';
  }

  if (multi >= 5000) {
    document.getElementById('rebirthButton4').style.display = 'block';
  }

  if (multi >= 12500) {
    document.getElementById('rebirthButton5').style.display = 'block';
  }

  if (multi >= 17500) {
    document.getElementById('rebirthButton6').style.display = 'block';
  }

  if (multi >= 25000) {
    document.getElementById('rebirthButton7').style.display = 'block';
  }

  if (multi >= 32500) {
    document.getElementById('rebirthButton8').style.display = 'block';
  }

  if (multi >= 37500) {
    document.getElementById('rebirthButton9').style.display = 'block';
  }

  if (multi >= 50000) {
    document.getElementById('rebirthButton10').style.display = 'block';
  }

  // Ascension Buttons
  if (rebirth >= 50) {
    document.getElementById('ascensionButton1').style.display = 'block';
  }

  if (rebirth >= 250) {
    document.getElementById('ascensionButton2').style.display = 'block';
  }

  if (rebirth >= 2500) {
    document.getElementById('ascensionButton3').style.display = 'block';
  }

  if (rebirth >= 5000) {
    document.getElementById('ascensionButton4').style.display = 'block';
  }

  if (rebirth >= 12500) {
    document.getElementById('ascensionButton5').style.display = 'block';
  }

  if (rebirth >= 17500) {
    document.getElementById('ascensionButton6').style.display = 'block';
  }

  if (rebirth >= 25000) {
    document.getElementById('ascensionButton7').style.display = 'block';
  }

  if (rebirth >= 32500) {
    document.getElementById('ascensionButton8').style.display = 'block';
  }

  if (rebirth >= 37500) {
    document.getElementById('ascensionButton9').style.display = 'block';
  }

  if (rebirth >= 50000) {
    document.getElementById('ascensionButton10').style.display = 'block';
  }
}

// Load game data from localStorage
function loadGame() {
  const savedData = JSON.parse(localStorage.getItem('gameData'));
  if (savedData) {
    money = savedData.money || 0;
    multi = savedData.multi || 1;
    rebirth = savedData.rebirth || 1;
    ascension = savedData.ascension || 1;
    multiAmount1 = savedData.multiAmount1 || 1;
    multiAmount2 = savedData.multiAmount2 || 5;
    multiAmount3 = savedData.multiAmount3 || 10;
    multiAmount4 = savedData.multiAmount4 || 25;
    multiAmount5 = savedData.multiAmount5 || 50;
    multiAmount6 = savedData.multiAmount6 || 150;
    multiAmount7 = savedData.multiAmount7 || 250;
    multiAmount8 = savedData.multiAmount8 || 500;
    multiAmount9 = savedData.multiAmount9 || 750;
    multiAmount10 = savedData.multiAmount10 || 1000;
    multiPrice1 = savedData.multiPrice1 || 5;
    multiPrice2 = savedData.multiPrice2 || 25;
    multiPrice3 = savedData.multiPrice3 || 250;
    multiPrice4 = savedData.multiPrice4 || 2500;
    multiPrice5 = savedData.multiPrice5 || 5000;
    multiPrice6 = savedData.multiPrice6 || 12500;
    multiPrice7 = savedData.multiPrice7 || 25000;
    multiPrice8 = savedData.multiPrice8 || 37500;
    multiPrice9 = savedData.multiPrice9 || 50000;
    multiPrice10 = savedData.multiPrice10 || 125000;

    rebirthPrice1 = savedData.rebirthPrice1 || 100;
    rebirthPrice2 = savedData.rebirthPrice2 || 500;
    rebirthPrice3 = savedData.rebirthPrice3 || 5000;
    rebirthPrice4 = savedData.rebirthPrice4 || 10000;
    rebirthPrice5 = savedData.rebirthPrice5 || 25000;
    rebirthPrice6 = savedData.rebirthPrice6 || 35000;
    rebirthPrice7 = savedData.rebirthPrice7 || 50000;
    rebirthPrice8 = savedData.rebirthPrice8 || 65000;
    rebirthPrice9 = savedData.rebirthPrice9 || 75000;
    rebirthPrice10 = savedData.rebirthPrice10 || 100000;

    ascensionPrice1 = savedData.ascensionPrice1 || 100;
    ascensionPrice2 = savedData.ascensionPrice2 || 500;
    ascensionPrice3 = savedData.ascensionPrice3 || 5000;
    ascensionPrice4 = savedData.ascensionPrice4 || 10000;
    ascensionPrice5 = savedData.ascensionPrice5 || 25000;
    ascensionPrice6 = savedData.ascensionPrice6 || 35000;
    ascensionPrice7 = savedData.ascensionPrice7 || 50000;
    ascensionPrice8 = savedData.ascensionPrice8 || 65000;
    ascensionPrice9 = savedData.ascensionPrice9 || 75000;
    ascensionPrice10 = savedData.ascensionPrice10 || 100000;

    rebirthUpgrade1Bought = savedData.rebirthUpgrade1Bought || 0;
    rebirthUpgrade2Bought = savedData.rebirthUpgrade2Bought || 0;
    rebirthUpgrade3Bought = savedData.rebirthUpgrade3Bought || 0;
    rebirthUpgrade4Bought = savedData.rebirthUpgrade4Bought || 0;
    rebirthUpgrade5Bought = savedData.rebirthUpgrade5Bought || 0;
    rebirthUpgrade6Bought = savedData.rebirthUpgrade6Bought || 0;
    rebirthUpgrade7Bought = savedData.rebirthUpgrade7Bought || 0;
    rebirthUpgrade8Bought = savedData.rebirthUpgrade8Bought || 0;
    rebirthUpgrade9Bought = savedData.rebirthUpgrade9Bought || 0;
    rebirthUpgrade10Bought = savedData.rebirthUpgrade10Bought || 0;

    multiUpgrade1Bought = savedData.multiUpgrade1Bought || 0;
    multiUpgrade2Bought = savedData.multiUpgrade2Bought || 0;
    multiUpgrade3Bought = savedData.multiUpgrade3Bought || 0;
    multiUpgrade4Bought = savedData.multiUpgrade4Bought || 0;
    multiUpgrade5Bought = savedData.multiUpgrade5Bought || 0;
    multiUpgrade6Bought = savedData.multiUpgrade6Bought || 0;
    multiUpgrade7Bought = savedData.multiUpgrade7Bought || 0;
    multiUpgrade8Bought = savedData.multiUpgrade8Bought || 0;
    multiUpgrade9Bought = savedData.multiUpgrade9Bought || 0;
    multiUpgrade10Bought = savedData.multiUpgrade10Bought || 0;

    ascensionUpgrade1Bought = savedData.ascensionUpgrade1Bought || 0;
    ascensionUpgrade2Bought = savedData.ascensionUpgrade2Bought || 0;
    ascensionUpgrade3Bought = savedData.ascensionUpgrade3Bought || 0;
    ascensionUpgrade4Bought = savedData.ascensionUpgrade4Bought || 0;
    ascensionUpgrade5Bought = savedData.ascensionUpgrade5Bought || 0;
    ascensionUpgrade6Bought = savedData.ascensionUpgrade6Bought || 0;
    ascensionUpgrade7Bought = savedData.ascensionUpgrade7Bought || 0;
    ascensionUpgrade8Bought = savedData.ascensionUpgrade8Bought || 0;
    ascensionUpgrade9Bought = savedData.ascensionUpgrade9Bought || 0;
    ascensionUpgrade10Bought = savedData.ascensionUpgrade10Bought || 0;
  }
  updateUI();
}

// Save game data to localStorage
function saveGame() {
  const gameData = {
    money,
    multi,
    rebirth,
    ascension,
    multiAmount1,
    multiAmount2,
    multiAmount3,
    multiAmount4,
    multiAmount5,
    multiAmount6,
    multiAmount7,
    multiAmount8,
    multiAmount9,
    multiAmount10,
    multiPrice1,
    multiPrice2,
    multiPrice3,
    multiPrice4,
    multiPrice5,
    multiPrice6,
    multiPrice7,
    multiPrice8,
    multiPrice9,
    multiPrice10,
    multiUpgrade1Bought,
    multiUpgrade2Bought,
    multiUpgrade3Bought,
    multiUpgrade4Bought,
    multiUpgrade5Bought,
    multiUpgrade6Bought,
    multiUpgrade7Bought,
    multiUpgrade8Bought,
    multiUpgrade9Bought,
    multiUpgrade10Bought,
    rebirthPrice1,
    rebirthPrice2,
    rebirthPrice3,
    rebirthPrice4,
    rebirthPrice5,
    rebirthPrice6,
    rebirthPrice7,
    rebirthPrice8,
    rebirthPrice9,
    rebirthPrice10,
    rebirthUpgrade1Bought,
    rebirthUpgrade2Bought,
    rebirthUpgrade3Bought,
    rebirthUpgrade4Bought,
    rebirthUpgrade5Bought,
    rebirthUpgrade6Bought,
    rebirthUpgrade7Bought,
    rebirthUpgrade8Bought,
    rebirthUpgrade9Bought,
    rebirthUpgrade10Bought,
    ascensionPrice1,
    ascensionPrice2,
    ascensionPrice3,
    ascensionPrice4,
    ascensionPrice5,
    ascensionPrice6,
    ascensionPrice7,
    ascensionPrice8,
    ascensionPrice9,
    ascensionPrice10,
    ascensionUpgrade1Bought,
    ascensionUpgrade2Bought,
    ascensionUpgrade3Bought,
    ascensionUpgrade4Bought,
    ascensionUpgrade5Bought,
    ascensionUpgrade6Bought,
    ascensionUpgrade7Bought,
    ascensionUpgrade8Bought,
    ascensionUpgrade9Bought,
    ascensionUpgrade10Bought,
  };

  localStorage.setItem('gameData', JSON.stringify(gameData));
}

function resetGame() {
  localStorage.clear();
  //main
  money = 0;
  multi = 1;
  rebirth = 1;
  ascension = 1;

  //multi
  multiAmount1 = 1;
  multiAmount2 = 5;
  multiAmount3 = 10;
  multiAmount4 = 25;
  multiAmount5 = 50;
  multiAmount6 = 150;
  multiAmount7 = 250;
  multiAmount8 = 500;
  multiAmount9 = 750;
  multiAmount10 = 1000;
  multiPrice1 = 5;
  multiPrice2 = 25;
  multiPrice3 = 250;
  multiPrice4 = 2500;
  multiPrice5 = 5000;
  multiPrice6 = 12500;
  multiPrice7 = 25000;
  multiPrice8 = 37500;
  multiPrice9 = 50000;
  multiPrice10 = 125000;
  multiUpgrade1Bought = 0;
  multiUpgrade2Bought = 0;
  multiUpgrade3Bought = 0;
  multiUpgrade4Bought = 0;
  multiUpgrade5Bought = 0;
  multiUpgrade6Bought = 0;
  multiUpgrade7Bought = 0;
  multiUpgrade8Bought = 0;
  multiUpgrade9Bought = 0;
  multiUpgrade10Bought = 0;
  //rebirth
  rebirthPrice1 = 100;
  rebirthPrice2 = 500;
  rebirthPrice3 = 5000;
  rebirthPrice4 = 10000;
  rebirthPrice5 = 25000;
  rebirthPrice6 = 35000;
  rebirthPrice7 = 50000;
  rebirthPrice8 = 65000;
  rebirthPrice9 = 75000;
  rebirthPrice10 = 100000;
  rebirthUpgrade1Bought = 0;
  rebirthUpgrade2Bought = 0;
  rebirthUpgrade3Bought = 0;
  rebirthUpgrade4Bought = 0;
  rebirthUpgrade5Bought = 0;
  rebirthUpgrade6Bought = 0;
  rebirthUpgrade7Bought = 0;
  rebirthUpgrade8Bought = 0;
  rebirthUpgrade9Bought = 0;
  rebirthUpgrade10Bought = 0;

  updateUI();
  saveGame();
  location.reload();
}

function addMoney() {
  money += multi;
  updateUI();
  saveGame();
}

setInterval(addMoney, 1000);
window.onload = loadGame; // Load game data on window load
