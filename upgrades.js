//Multi Upgrades
function upgradeMultiplier(upgradeIndex) {
  let price;
  let amount;

  switch (upgradeIndex) {
    case 0:
      price = multiPrice1;
      amount = multiAmount1;
      multiUpgrade1Bought += 1;
      break;
    case 1:
      price = multiPrice2;
      amount = multiAmount2;
      multiUpgrade2Bought += 1;
      break;
    case 2:
      price = multiPrice3;
      amount = multiAmount3;
      multiUpgrade3Bought += 1;
      break;
    case 3:
      price = multiPrice4;
      amount = multiAmount4;
      multiUpgrade4Bought += 1;
      break;
    case 4:
      price = multiPrice5;
      amount = multiAmount5;
      multiUpgrade5Bought += 1;
      break;
    case 5:
      price = multiPrice6;
      amount = multiAmount6;
      multiUpgrade6Bought += 1;
      break;
    case 6:
      price = multiPrice7;
      amount = multiAmount7;
      multiUpgrade7Bought += 1;
      break;
    case 7:
      price = multiPrice8;
      amount = multiAmount8;
      multiUpgrade8Bought += 1;
      break;
    case 8:
      price = multiPrice9;
      amount = multiAmount9;
      multiUpgrade9Bought += 1;
      break;
    case 9:
      price = multiPrice10;
      amount = multiAmount10;
      multiUpgrade10Bought += 1;
      break;
  }

  if (money >= price) {
    money -= price;
    multi += amount;

    switch (upgradeIndex) {
      case 0:
        if (multiUpgrade1 >= 10) {
          multiPrice1 *= 1.5;
        }
        multiPrice1 *= 1.25;
        break;
      case 1:
        if (multiUpgrade2 >= 10) {
          multiPrice2 *= 1.5;
        }
        multiPrice2 *= 1.25;
        break;
      case 2:
        if (multiUpgrade3 >= 10) {
          multiPrice3 *= 1.5;
        }
        multiPrice3 *= 1.25;
        break;
      case 3:
        if (multiUpgrade4 >= 10) {
          multiPrice4 *= 1.5;
        }
        multiPrice4 *= 1.25;
        break;
      case 4:
        if (multiUpgrade5 >= 10) {
          multiPrice5 *= 1.5;
        }
        multiPrice5 *= 1.25;
        break;
      case 5:
        if (multiUpgrade6 >= 10) {
          multiPrice6 *= 1.5;
        }
        multiPrice6 *= 1.25;
        break;
      case 6:
        if (multiUpgrade7 >= 10) {
          multiPrice7 *= 1.5;
        }
        multiPrice7 *= 1.25;
        break;
      case 7:
        if (multiUpgrade8 >= 10) {
          multiPrice8 *= 1.5;
        }
        multiPrice8 *= 1.25;
        break;
      case 8:
        if (multiUpgrade9 >= 10) {
          multiPrice9 *= 1.5;
        }
        multiPrice9 *= 1.25;
        break;
      case 9:
        if (multiUpgrade10 >= 10) {
          multiPrice10 *= 1.5;
        }
        multiPrice10 *= 1.25;
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

//Rebirth Upgrades
function upgradeRebirth(rebirthIndex) {
  let price;
  let amount;

  switch (rebirthIndex) {
    case 0:
      price = rebirthPrice1;
      amount = rebirthAmount1;
      rebirthUpgrade1Bought += 1;
      break;
    case 1:
      price = rebirthPrice2;
      amount = rebirthAmount2;
      rebirthUpgrade2Bought += 1;
      break;
    case 2:
      price = rebirthPrice3;
      amount = rebirthAmount3;
      rebirthUpgrade3Bought += 1;
      break;
    case 3:
      price = rebirthPrice4;
      amount = rebirthAmount4;
      rebirthUpgrade4Bought += 1;
      break;
    case 4:
      price = rebirthPrice5;
      amount = rebirthAmount5;
      rebirthUpgrade5Bought += 1;
      break;
    case 5:
      price = rebirthPrice6;
      amount = rebirthAmount6;
      rebirthUpgrade6Bought += 1;
      break;
    case 6:
      price = rebirthPrice7;
      amount = rebirthAmount7;
      rebirthUpgrade7Bought += 1;
      break;
    case 7:
      price = rebirthPrice8;
      amount = rebirthAmount8;
      rebirthUpgrade8Bought += 1;
      break;
    case 8:
      price = rebirthPrice9;
      amount = rebirthAmount9;
      rebirthUpgrade9Bought += 1;
      break;
    case 9:
      price = rebirthPrice10;
      amount = rebirthAmount10;
      rebirthUpgrade10Bought += 1;
      break;
  }

  if (multi >= price) {
    multi -= price;
    rebirth += amount;

    switch (rebirthIndex) {
      case 0:
        if (rebirthUpgrade1Bought >= 10) {
          rebirthPrice1 *= 1.35;
        }
        rebirthPrice1 *= 1.15;
        break;
      case 1:
        if (rebirthUpgrade2Bought >= 10) {
          rebirthPrice2 *= 1.35;
        }
        rebirthPrice2 *= 1.15;
        break;
      case 2:
        if (rebirthUpgrade3Bought >= 10) {
          rebirthPrice3 *= 1.35;
        }
        rebirthPrice3 *= 1.15;
        break;
      case 3:
        if (rebirthUpgrade4Bought >= 10) {
          rebirthPrice4 *= 1.35;
        }
        rebirthPrice4 *= 1.15;
        break;
      case 4:
        if (rebirthUpgrade5Bought >= 10) {
          rebirthPrice5 *= 1.35;
        }
        rebirthPrice5 *= 1.15;
        break;
      case 5:
        if (rebirthUpgrade6Bought >= 10) {
          rebirthPrice6 *= 1.35;
        }
        rebirthPrice6 *= 1.15;
        break;
      case 6:
        if (rebirthUpgrade7Bought >= 10) {
          rebirthPrice7 *= 1.35;
        }
        rebirthPrice7 *= 1.15;
        break;
      case 7:
        if (rebirthUpgrade8Bought >= 10) {
          rebirthPrice8 *= 1.35;
        }
        rebirthPrice8 *= 1.15;
        break;
      case 8:
        if (rebirthUpgrade9Bought >= 10) {
          rebirthPrice9 *= 1.35;
        }
        rebirthPrice9 *= 1.15;
        break;
      case 9:
        if (rebirthUpgrade10Bought >= 10) {
          rebirthPrice10 *= 1.35;
        }
        rebirthPrice10 *= 1.15;
        break;
    }
    rebirthReset();
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
function rebirth6() {
  console.log('Rebirth 6 clicked');
  upgradeRebirth(5);
}
function rebirth7() {
  console.log('Rebirth 7 clicked');
  upgradeRebirth(6);
}
function rebirth8() {
  console.log('Rebirth 8 clicked');
  upgradeRebirth(7);
}
function rebirth9() {
  console.log('Rebirth 9 clicked');
  upgradeRebirth(8);
}
function rebirth10() {
  console.log('Rebirth 10 clicked');
  upgradeRebirth(9);
}

//Ascension upgrade
function upgradeAscension(ascensionIndex) {
  let price;
  let amount;

  switch (ascensionIndex) {
    case 0:
      price = ascensionPrice1;
      amount = ascensionAmount1;
      ascensionUpgrade1Bought += 1;
      break;
  }

  if (rebirth >= price) {
    rebirth -= price;
    ascension += amount;

    switch (ascensionIndex) {
      case 0:
        if (ascensionUpgrade1Bought > 15) {
          ascensionPrice1 *= 1.5;
        }
       else { if (ascensionUpgrade1Bought >= 10) {
          ascensionPrice1 *= 1.35;
        }
        else { 
          ascensionPrice1 *= 1.15;
        }
      }
        break;
     
    }
    ascensionReset();
    updateUI();
    saveGame();
  }
}

function ascension() {
  console.log('Ascension 1 clicked');
  upgradeAscension(0);
}
function ascension() {
  console.log('Ascension 2 clicked');
  upgradeAscension(1);
}
function ascension3() {
  console.log('Ascension 3 clicked');
  upgradeAscension(2);
}
function ascension4() {
  console.log('Ascension 4 clicked');
  upgradeAscension(3);
}
function ascension5() {
  console.log('Ascension 5 clicked');
  upgradeAscension(4);
}
function ascension6() {
  console.log('Ascension 6 clicked');
  upgradeRebirth(5);
}
function ascension7() {
  console.log('Ascension 7 clicked');
  upgradeAscension(6);
}
function ascension8() {
  console.log('Ascension 8 clicked');
  upgradeAscension(7);
}
function ascension9() {
  console.log('Ascension 9 clicked');
  upgradeAscension(8);
}
function ascension10() {
  console.log('Ascension 10 clicked');
  upgradeAscension(9);
}
