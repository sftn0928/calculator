var lastSym = "";
var preNum = 0;
var result = 0;

// 数字を押したときのイベント
const clickNumber = (num) => {
  // 現在の値を代入
  var currentNum = document.getElementById("currentNum").value;
  if ((currentNum === "0" || currentNum === preNum ||
      result === parseInt(currentNum)) || Number.isInteger(currentNum)) {
    currentNum = num;
  } else {
    currentNum += num;
  }
  document.getElementById("currentNum").value = currentNum;
};

// 記号を押したときのイベント
const clickSymbol = (sym) => {
  if (sym != "=") {
    if (sym === "AC") allClear();
    if (sym === "C") Clear();
    if (sym === "+/-") switchPlusMinus();
    // 以前の値を格納
    preNum = document.getElementById("currentNum").value;
    // 最後に押した記号を格納
    lastSym = sym;
  } else {
    currentNum = document.getElementById("currentNum").value;
    switch (lastSym) {
      case "+":
        result = Number(preNum) + Number(currentNum);
        break;
      case "-":
        result = Number(preNum) - Number(currentNum);
        break;
      case "*":
        result = Number(preNum) * Number(currentNum);
        break;
      case "/":
        result = Number(preNum) / Number(currentNum);
        break;
      case "%":
        result = Number(preNum) % Number(currentNum);
        break;
      default:
        break;
    }
    // 計算結果を表示
    document.getElementById("currentNum").value = result;
  }
};

// .を押した時のイベント
const clickPoint = () => {
  let pointNum = document.getElementById("currentNum").value;
  if (!Number.isInteger(pointNum)) {
    pointNum += ".";
  }
  document.getElementById("currentNum").value = pointNum;
}

// ACを押した時の関数
const allClear = () => {
  document.getElementById("currentNum").value = 0;
}

// Cを押した時の関数
const Clear = () => {
  currentNum = document.getElementById("currentNum").value;
  let divNum = currentNum / 10;
  if (Math.abs(divNum) > 0) {
    document.getElementById("currentNum").value = parseInt(divNum) * 10 / 10;
  } else {
    document.getElementById("currentNum").value = 0;
  }
}

// +/-を押した時の関数
const switchPlusMinus = () => {
  let absNum = document.getElementById("currentNum").value;
  if (absNum > 0) {
    absNum = "-" + absNum
  } else {
    absNum = Math.abs(absNum);
  }
  document.getElementById("currentNum").value = absNum;
}