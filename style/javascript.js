var lastSym = "";
var preNum = 0;
var result = 0;

// 数字を押したときのイベント
clickNumber = (num) => {
  // 現在の値を代入
  var currentNum = document.getElementById("currentNum").value;
  if (currentNum === "0" || currentNum === preNum ||
    result === parseInt(currentNum)) {
    currentNum = num;
  } else {
    if (num === '00') {
      currentNum *= 100;
    } else if (num === '0') {
      currentNum *= 10;
    } else {
      currentNum += num;
    }
  }
  document.getElementById("currentNum").value = currentNum;
};

// 記号を押したときのイベント
clickSymbol = (sym) => {
  if (sym != "=") {
    if (sym === "AC") allClear();
    if (sym === "C") Clear();
    if (sym === "+/-") switchPlusMinus();
    // 以前の値を格納
    preNum = document.getElementById("currentNum").value;
    // 最後に押した記号を格納
    lastSym = sym;
    document.getElementById("currentNum").value = preNum;
  } else {
    var currentNum = document.getElementById("currentNum").value;
    switch (lastSym) {
      case "+":
        result = parseInt(preNum) + parseInt(currentNum);
        break;
      case "-":
        result = parseInt(preNum) - parseInt(currentNum);
        break;
      case "*":
        result = parseInt(preNum) * parseInt(currentNum);
        break;
      case "/":
        result = parseInt(preNum) / parseInt(currentNum);
        break;
      case "%":
        result = parseInt(preNum) % parseInt(currentNum);
        break;
      default:
        break;
    }
    // 計算結果を表示
    document.getElementById("currentNum").value = result;
  }
};

// ACを押した時のメソッド
allClear = () => {
  document.getElementById("currentNum").value = 0;
}

// Cを押した時のメソッド
Clear = () => {
  currentNum = document.getElementById("currentNum").value;
  let divNum = currentNum / 10;
  if (Math.abs(divNum) > 0) {
    document.getElementById("currentNum").value = parseInt(divNum) * 10 / 10;
  } else {
    document.getElementById("currentNum").value = 0;
  }
}

// +/-を押した時のメソッド
switchPlusMinus = () => {
  let absNum = document.getElementById("currentNum").value;
  if (absNum > 0) {
    absNum = "-" + absNum
  } else {
    absNum = Math.abs(absNum);
  }
  document.getElementById("currentNum").value = absNum;
}
