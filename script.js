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

//Rebirth Upgrades
function rebirth1() {
  if (multi >= rebirthPrice1) {
    rebirth += 1;
    rebirthReset();
    updateUI();
  }
}
function rebirth2() {
  if (multi >= rebirthPrice2) {
    rebirth += 5;
    rebirthReset();
    updateUI();
  }
}


//Rebirth Reset
function rebirthReset() {
  multi = 1;
  (multiAmount1 = 1), (multiAmount2 = 5), (multiAmount3 = 10);
  (multiPrice1 = 5), (multiPrice2 = 50), (multiPrice3 = 500);
  multiAmount1 *= rebirth;
  multiAmount2 *= rebirth;
  multiAmount3 *= rebirth;
  updateUI();
}

//Multi Upgrades
function multiUpgrade1() {
  if (money >= multiPrice1) {
    money -= multiPrice1;
    multi += multiAmount1;
    multiPrice1 *= 1.5;
    updateUI();
  }
}
function multiUpgrade2() {
  if (money >= multiPrice2) {
    money -= multiPrice2;
    multi += multiAmount2;
    multiPrice2 *= 1.5;
    updateUI();
  }
}
function multiUpgrade3() {
  if (money >= multiPrice3) {
    money -= multiPrice3;
    multi += multiAmount3;
    multiPrice3 *= 1.5;
    updateUI();
  }
}
function multiUpgrade4() {
  if (money >= multiPrice4) {
    money -= multiPrice4;
    multi += multiAmount4;
    multiPrice4 *= 1.5;
    updateUI();
  }
}
function multiUpgrade5() {
  if (money >= multiPrice5) {
    money -= multiPrice5;
    multi += multiAmount5;
    multiPrice5 *= 1.5;
    updateUI();
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

  //Multi Button 1
  if (money >= 5) {
    document.getElementById('multiButton1').style.display = 'block';
  }
  //Multi Button 2
  if (money >= 45) {
    document.getElementById('multiButton2').style.display = 'block';
  }
  //Multi Button 3
  if (money >= 450) {
    document.getElementById('multiButton3').style.display = 'block';
  }
  //Multi Button 4
  if (rebirth >= 2) {
    document.getElementById('multiButton4').style.display = 'block';
  }
  //Multi Button 5
  if (rebirth >= 5) {
    document.getElementById('multiButton5').style.display = 'block';
  }

  //Rebirth Buttons

  //Rebirth Button 1
  if (multi >= 50) {
    document.getElementById('rebirthButton1').style.display = 'block';
  }
  //Rebirth Button 2
  if (multi >= 500) {
    document.getElementById('rebirthButton2').style.display = 'block';
  }
}
function addMoney() {
  money += multi;
  updateUI();
}
setInterval(addMoney, 1000);
window.onload = updateUI;
