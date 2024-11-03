let money = 0;
let multi = 1;
let rebirth = 1;
let multiAmount1 = 1,
  multiAmount2 = 5,
  multiAmount3 = 10,
  multiAmount4 = 25,
  multiAmount5 = 50;
let multiPrice1 = 5,
  multiPrice2 = 50,
  multiPrice3 = 500,
  multiPrice4 = 5000,
  multiPrice5 = 10000;
let rebirthPrice1 = 100,
  rebirthPrice2 = 1000;

// Load game data from localStorage
function loadGame() {
  const savedData = JSON.parse(localStorage.getItem('gameData'));
  if (savedData) {
    money = savedData.money || 0;
    multi = savedData.multi || 1;
    rebirth = savedData.rebirth || 1;
    multiAmount1 = savedData.multiAmount1 || 1;
    multiAmount2 = savedData.multiAmount2 || 5;
    multiAmount3 = savedData.multiAmount3 || 10;
    multiAmount4 = savedData.multiAmount4 || 25;
    multiAmount5 = savedData.multiAmount5 || 50;
    multiPrice1 = savedData.multiPrice1 || 5;
    multiPrice2 = savedData.multiPrice2 || 50;
    multiPrice3 = savedData.multiPrice3 || 500;
    multiPrice4 = savedData.multiPrice4 || 5000;
    multiPrice5 = savedData.multiPrice5 || 10000;
    rebirthPrice1 = savedData.rebirthPrice1 || 100;
    rebirthPrice2 = savedData.rebirthPrice2 || 1000;
  }
  updateUI();
}

// Save game data to localStorage
function saveGame() {
  const gameData = {
    money,
    multi,
    rebirth,
    multiAmount1,
    multiAmount2,
    multiAmount3,
    multiAmount4,
    multiAmount5,
    multiPrice1,
    multiPrice2,
    multiPrice3,
    multiPrice4,
    multiPrice5,
    rebirthPrice1,
    rebirthPrice2,
  };
  localStorage.setItem('gameData', JSON.stringify(gameData));
}

//Rebirth Upgrades
function rebirth1() {
  if (multi >= rebirthPrice1) {
    rebirth += 1;
    rebirthReset();
    updateUI();
    saveGame(); 
  }
}
function rebirth2() {
  if (multi >= rebirthPrice2) {
    rebirth += 5;
    rebirthReset();
    updateUI();
    saveGame(); 
  }
}

//Rebirth Reset
function rebirthReset() {
  multi = 1;
  multiAmount1 = 1;
  multiAmount2 = 5;
  multiAmount3 = 10;
  multiPrice1 = 5;
  multiPrice2 = 50;
  multiPrice3 = 500;
  multiAmount1 *= rebirth;
  multiAmount2 *= rebirth;
  multiAmount3 *= rebirth;
  updateUI();
  saveGame(); // Save after reset
}

//Multi Upgrades
function multiUpgrade1() {
  if (money >= multiPrice1) {
    money -= multiPrice1;
    multi += multiAmount1;
    multiPrice1 *= 1.5;
    updateUI();
    saveGame(); 
  }
}
function multiUpgrade2() {
  if (money >= multiPrice2) {
    money -= multiPrice2;
    multi += multiAmount2;
    multiPrice2 *= 1.5;
    updateUI();
    saveGame(); 
  }
}
function multiUpgrade3() {
  if (money >= multiPrice3) {
    money -= multiPrice3;
    multi += multiAmount3;
    multiPrice3 *= 1.5;
    updateUI();
    saveGame(); 
  }
}
function multiUpgrade4() {
  if (money >= multiPrice4) {
    money -= multiPrice4;
    multi += multiAmount4;
    multiPrice4 *= 1.5;
    updateUI();
    saveGame(); 
  }
}
function multiUpgrade5() {
  if (money >= multiPrice5) {
    money -= multiPrice5;
    multi += multiAmount5;
    multiPrice5 *= 1.5;
    updateUI();
    saveGame(); 
  }
}

function updateUI() {
  document.getElementById('money').innerHTML =
    Math.floor(money).toLocaleString();
  document.getElementById('multi').innerHTML =
    Math.floor(multi).toLocaleString();
  document.getElementById('rebirth').innerHTML =
    Math.floor(rebirth).toLocaleString();
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

  //Update Other UIs
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
}

//show buttons
function buttonUI() {
  //Multi Buttons
  if (money >= 5) {
    document.getElementById('multiButton1').style.display = 'block';
  }
  if (money >= 45) {
    document.getElementById('multiButton2').style.display = 'block';
  }
  if (money >= 450) {
    document.getElementById('multiButton3').style.display = 'block';
  }
  if (rebirth >= 2) {
    document.getElementById('multiButton4').style.display = 'block';
  }
  if (rebirth >= 5) {
    document.getElementById('multiButton5').style.display = 'block';
  }

  //Rebirth Buttons
  if (multi >= 50) {
    document.getElementById('rebirthButton1').style.display = 'block';
  }
  if (multi >= 500) {
    document.getElementById('rebirthButton2').style.display = 'block';
  }
}

function addMoney() {
  money += multi;
  updateUI();
  saveGame(); // Save after adding money
}

setInterval(addMoney, 1000);
window.onload = loadGame; // Load game data on window load
