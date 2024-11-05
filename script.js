let money = 0;
let multi = 1;
let rebirth = 1;
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

let multiPrice1 = 5,
  multiPrice2 = 50,
  multiPrice3 = 500,
  multiPrice4 = 5000,
  multiPrice5 = 10000,
  multiPrice6 = 25000,
  multiPrice7 = 50000,
  multiPrice8 = 75000,
  multiPrice9 = 100000,
  multiPrice10 = 250000;

let rebirthPrice1 = 100,
rebirthPrice2 = 500,
rebirthPrice3 = 5000,
rebirthPrice4 = 500,
rebirthPrice5 = 5000;

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
    multiAmount6 = savedData.multiAmount6 || 150;
    multiAmount7 = savedData.multiAmount7 || 250;
    multiAmount8 = savedData.multiAmount8 || 500;
    multiAmount9 = savedData.multiAmount9 || 750;
    multiAmount10 = savedData.multiAmount10 || 1000;
    multiPrice1 = savedData.multiPrice1 || 5;
    multiPrice2 = savedData.multiPrice2 || 50;
    multiPrice3 = savedData.multiPrice3 || 500;
    multiPrice4 = savedData.multiPrice4 || 5000;
    multiPrice5 = savedData.multiPrice5 || 10000;
    multiPrice6 = savedData.multiPrice6 || 25000;
    multiPrice7 = savedData.multiPrice7 || 50000;
    multiPrice8 = savedData.multiPrice8 || 75000;
    multiPrice9 = savedData.multiPrice9 || 100000;
    multiPrice10 = savedData.multiPrice10 || 250000;

    rebirthPrice1 = savedData.rebirthPrice1 || 100;
    rebirthPrice2 = savedData.rebirthPrice2 || 500;
    rebirthPrice3 = savedData.rebirthPrice3 || 5000;
    rebirthPrice4 = savedData.rebirthPrice4 || 10000;
    rebirthPrice5 = savedData.rebirthPrice5 || 25000;
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
    rebirthPrice1,
    rebirthPrice2,
    rebirthPrice3,
    rebirthPrice4,
    rebirthPrice5,
  };
  localStorage.setItem('gameData', JSON.stringify(gameData));
}
function resetGame() {
  localStorage.clear();

  money = 0;
  multi = 1;
  rebirth = 1;
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
  multiPrice2 = 50;
  multiPrice3 = 500;
  multiPrice4 = 5000;
  multiPrice5 = 10000;
  multiPrice6 = 25000;
  multiPrice7 = 50000;
  multiPrice8 = 75000;
  multiPrice9 = 100000;
  multiPrice10 = 250000;

  rebirthPrice1 = 100;
  rebirthPrice2 = 500;
  rebirthPrice3 = 5000;
  rebirthPrice4 = 500;
  rebirthPrice5 = 5000;
  
  updateUI();
  saveGame();
  location.reload();
}
//Rebirth Upgrades
function upgradeRebirth(rebirthIndex) {
  let price2;
  let amount2;

  switch (rebirthIndex) {
    case 0:
      price2 = rebirthPrice1;
      amount2 += 1;
      break;
      case 1:
      price2 = rebirthPrice2;
      amount2 += 5;
      break;
      case 2:
      price2 = rebirthPrice3;
      amount2 += 15;
      break;
      case 3:
      price2 = rebirthPrice4;
      amount2 += 50;
      break;
      case 4:
      price2 = rebirthPrice5;
      amount2 += 100;
      break;

  }

  if (multi >= price2) {
    multi -= price2;
    rebirth += amount2;

    switch (rebirthIndex) {
      case 0:
        rebirthPrice1 *= 1.5;
        break;
        case 1:
        rebirthPrice2 *= 1.5;
        break;
        case 2:
        rebirthPrice3 *= 1.5;
        break;
        case 3:
        rebirthPrice4 *= 1.5;
        break;
        case 4:
        rebirthPrice5 *= 1.5;
        break;

    }
    updateUI();
    saveGame();
  }
}
function rebirth1() {
  console.log('Rebirth 1 clicked');
  upgradeRebirth(0);
}
function rebirth2() {
  console.log('Rebirth 2 clicked');
  upgradeRebirth(1);
}
function rebirth3() {
  console.log('Rebirth 3 clicked');
  upgradeRebirth(2);
}
function rebirth4() {
  console.log('Rebirth 4 clicked');
  upgradeRebirth(3);
}
function rebirth5() {
  console.log('Rebirth 5 clicked');
  upgradeRebirth(4);
}
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
  multiPrice2 = 50;
  multiPrice3 = 500;
  multiPrice4 = 5000;
  multiPrice5 = 10000;
  multiPrice1 = 25000;
  multiPrice2 = 50000;
  multiPrice3 = 75000;
  multiPrice4 = 100000;
  multiPrice5 = 250000;
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

//Multi Upgrades

function upgradeMultiplier(upgradeIndex) {
  let price;
  let amount;

  switch (upgradeIndex) {
    case 0:
      price = multiPrice1;
      amount = multiAmount1;
      break;
    case 1:
      price = multiPrice2;
      amount = multiAmount2;
      break;
    case 2:
      price = multiPrice3;
      amount = multiAmount3;
      break;
    case 3:
      price = multiPrice4;
      amount = multiAmount4;
      break;
    case 4:
      price = multiPrice5;
      amount = multiAmount5;
      break;
    case 5:
      price = multiPrice6;
      amount = multiAmount6;
      break;
    case 6:
      price = multiPrice7;
      amount = multiAmount7;
      break;
    case 7:
      price = multiPrice8;
      amount = multiAmount8;
      break;
    case 8:
      price = multiPrice9;
      amount = multiAmount9;
      break;
    case 9:
      price = multiPrice10;
      amount = multiAmount10;
      break;
  }

  if (money >= price) {
    money -= price;
    multi += amount;

    switch (upgradeIndex) {
      case 0:
        multiPrice1 *= 1.5;
        break;
      case 1:
        multiPrice2 *= 1.5;
        break;
      case 2:
        multiPrice3 *= 1.5;
        break;
      case 3:
        multiPrice4 *= 1.5;
        break;
      case 4:
        multiPrice5 *= 1.5;
        break;
      case 5:
        multiPrice6 *= 1.5;
        break;
      case 6:
        multiPrice7 *= 1.5;
        break;
      case 7:
        multiPrice8 *= 1.5;
        break;
      case 8:
        multiPrice9 *= 1.5;
        break;
      case 9:
        multiPrice10 *= 1.5;
        break;
    }

    updateUI();
    saveGame();
  }
}

function multiUpgrade1() {
  console.log('Upgrade 1 clicked');
  upgradeMultiplier(0);
}
function multiUpgrade2() {
  console.log('Upgrade 2 clicked');
  upgradeMultiplier(1);
}
function multiUpgrade3() {
  console.log('Upgrade 3 clicked');
  upgradeMultiplier(2);
}
function multiUpgrade4() {
  console.log('Upgrade 4 clicked');
  upgradeMultiplier(3);
}
function multiUpgrade5() {
  console.log('Upgrade 5 clicked');
  upgradeMultiplier(4);
}
function multiUpgrade6() {
  console.log('Upgrade 6 clicked');
  upgradeMultiplier(5);
}
function multiUpgrade7() {
  console.log('Upgrade 7 clicked');
  upgradeMultiplier(6);
}
function multiUpgrade8() {
  console.log('Upgrade 8 clicked');
  upgradeMultiplier(7);
}
function multiUpgrade9() {
  console.log('Upgrade 9 clicked');
  upgradeMultiplier(8);
}
function multiUpgrade10() {
  console.log('Upgrade 10 clicked');
  upgradeMultiplier(9);
}

function updateUI() {
  document.getElementById('money').innerHTML =
    Math.floor(money).toLocaleString();
  document.getElementById('multi').innerHTML =
    Math.floor(multi).toLocaleString();
  document.getElementById('rebirth').innerHTML =
    Math.floor(rebirth).toLocaleString();
  //Multi Buttons
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

}

function addMoney() {
  money += multi;
  updateUI();
  saveGame();
}

setInterval(addMoney, 1000);
window.onload = loadGame; // Load game data on window load
