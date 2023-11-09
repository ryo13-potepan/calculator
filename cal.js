
const result = document.getElementById("calDisplay");
const operator = document.getElementById("opeButton");
const number = document.getElementById("numButton");

//（target）で、イベントが発生した要素を返す
function clickButton(target) {
  let targetValue = target.innerHTML;
  console.log(targetValue);
  if (targetValue == "AC") {
    result.value = "";
    } else {
      if (targetValue == "=") {
        result.value = eval(result.value);
      } else {
        if(result.value == "0") {
          result.value = targetValue;
        } else {
          if (result.value.slice(-1) == `operator`){
            const o = result.value.slice(0)
            result.value = o + targetValue;
          } else if(result.value.slice(-1) == `number`) {
            result.value += targetValue}
        }
      }
    }
  }
  