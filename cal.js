
const result = document.getElementById("calDisplay");


function number (target){
  //押下されたnumberボタンのinnerHTMLをtargetValueに格納
  let targetValue = target.innerHTML;
  //確認用
  console.log(targetValue);
  //ディスプレイの値が０のみなら、押下したnumberボタンの値に書き換える
  if(result.value === "0"){
    result.value = targetValue;
  //元が０でないなら、押下したボタンの値を連結していく
  } else {
    result.value += targetValue;
  }
}

function ope(target) {
  //押下されたopeボタンのinnerHTMLをtargetValueに格納
  let targetValue = target.innerHTML;
  //確認用
  console.log(targetValue);
  //ディスプレイの値の右端が+,-,×,÷,小数点なら、returnで処理を終了する。
  //そうでないなら、押下したボタンの値を連結して表示する。
  if(result.value.slice(-1) === "+"){
    return;
  } else if(result.value.slice(-1) === "-"){
    return;
  } else if(result.value.slice(-1) === "*"){
    return;
  } else if(result.value.slice(-1) === "/"){
    return;
  } else if(result.value.slice(-1) === "."){
    return;
  } else {
    result.value += targetValue;
  }
}

//電卓の計算処理
function calc(target){
  let targetValue = target.innerHTML;
  console.log(targetValue);
  result.value = eval(result.value);
}

function allClear(target){
  let targetValue = target.innerHTML;
  console.log(targetValue);
    result.value = "";
  }