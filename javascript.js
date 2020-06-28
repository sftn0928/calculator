clickNumber = (num) => {
  var currentNum = document.getElementById("currentNum").value;
  if (currentNum === "0") {
    currentNum = num;
  } else {
    currentNum += num;
  }
  document.getElementById("currentNum").value = currentNum;
};

clickSymbol = (sym) => {
  if (sym != "=") {
    var storeNum = document.getElementById("currentNum").value;
    var lastSym = sym;
    console.log(lastSym);
    console.log(storeNum);
  }
  else{
    var currentNum = document.getElementById("currentNum").value;
    var result = 0;
    switch (lastSym) {
      case "+":
        console.log(currentNum);
        result = storeNum + currentNum;
        break;
      case "-":
        break;
      case "*":
        break;
      case "/":
        break;
      case "%":
        break;
      case "=":
        break;
    }
    document.getElementById("currentNum").value = result;
    console.log(result);
  }
};
