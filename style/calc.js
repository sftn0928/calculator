var lastSym = "";
var preNum = 0;
var result = 0;

// 数字を押したときのイベント
const clickNumber = (num) => {
  // 現在の値を代入
  var currentNum = document.getElementById("currentNum").value;
  if (currentNum === "0" || currentNum === preNum ||
      result === currentNum || Number.isInteger(currentNum)) {
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
  let arrayNum = pointNum.split('').pop();
  if (Number.isInteger(Number(pointNum)) && arrayNum != ".") {
    pointNum += ".";
  }
  document.getElementById("currentNum").value = pointNum;
}

// ACを押した時のメソッド
const allClear = () => {
  document.getElementById("currentNum").value = "0";
}

// Cを押した時のメソッド
const Clear = () => {
  currentNum = document.getElementById("currentNum").value;
  let arrayNum = currentNum.split('')　// 文字列を配列に変換
  if (arrayNum.length > 1) {　　　　　　// 配列の要素が2つ以上の時
    arrayNum.pop();          　　　　　 // 配列の末尾を削除
    let clearNum = arrayNum.join("");　//　配列を文字列に変換
    document.getElementById("currentNum").value = clearNum;
  } else {
    document.getElementById("currentNum").value = "0";
  }
}

// +/-を押した時のメソッド
const switchPlusMinus = () => {
  let absNum = document.getElementById("currentNum").value;
  if (absNum > 0) {
    absNum = "-" + absNum
  } else {
    absNum = Math.abs(absNum);
  }
  document.getElementById("currentNum").value = absNum;
}