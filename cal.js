const result = document.getElementById("calDisplay");

//（target）で、イベントが発生したエレメントを返す
function clickButton(target) {
  //console.log(target.innerHTML);
  let targetValue = target.innerHTML;
  //result.value += targetValue;
  console.log(targetValue);

  if (targetValue == "AC") {
    result.value = "";
  } else {
    if (targetValue == "=") {
      result.value = eval(result.value);
    } else {
      result.value += targetValue;
    }
  }
}
//   if (buttonValue == "c") {
//     result.innerHTML = "";
//     console.log(buttonValue);
//   } else {
//     result.innerHTML = buttonValue;
//   }
