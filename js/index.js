function checkCashRegister(price, cash, cid) {
  //prepare data with everything *100 god bless JS

  let amountToPay = Math.round((cash - price) * 100);

  let cidIntoObj = {};
  cid.map((el) => {
    cidIntoObj[el[0]] = Math.round(el[1] * 100);
  });

  let changeWeGive = [];
  let tempmoneyData = ["ONE HUNDRED","TWENTY","TEN","FIVE","ONE","QUARTER","DIME","NICKEL","PENNY"];

  let moneyData = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000,
  };

  function processOne(
    amountToPay,
    cidIntoObj,
    changeWeGive,
    moneyData,
    whichMoney
  ) {
    if (amountToPay >= moneyData[whichMoney] && cidIntoObj[whichMoney]) {
      if (amountToPay >= cidIntoObj[whichMoney]) {
        amountToPay -= cidIntoObj[whichMoney];
        changeWeGive.push([whichMoney, cidIntoObj[whichMoney] / 100]);
        cidIntoObj[whichMoney] = 0;
      } else {
        const howMuchInHundreds =
          Math.floor(amountToPay / moneyData[whichMoney]) *
          moneyData[whichMoney];
        amountToPay -= howMuchInHundreds;
        changeWeGive.push([whichMoney, howMuchInHundreds / 100]);
        cidIntoObj[whichMoney] -= howMuchInHundreds;
      }
    }

    return [amountToPay, cidIntoObj, changeWeGive];
  }

  tempmoneyData.forEach(
    el=>[amountToPay, cidIntoObj, changeWeGive] = processOne(
      amountToPay,
      cidIntoObj,
      changeWeGive,
      moneyData,
      el
    )
  )

 
  if (amountToPay > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  let whatsleft = Object.values(cidIntoObj).reduce((sum, el) => sum + el, 0);

  if (whatsleft > 0) {
    return { status:"OPEN", change: changeWeGive };
  }

  return { status: "CLOSED", change: cid };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);