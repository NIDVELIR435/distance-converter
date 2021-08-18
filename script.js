let Select_in = document.querySelector('#select-in');
let Select_result = document.querySelector('#select-result');

let main__inputIn = document.querySelector('#main__input-in');
let main__inputResult = document.querySelector('#main__input-result');

let OnchangeFunc = () => {
   if (Select_in.options[Select_in.selectedIndex].value == 'm' && Select_result.options[Select_result.selectedIndex].value == 'm') {
      main__inputResult.value = main__inputIn.value;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'm' && Select_result.options[Select_result.selectedIndex].value == 'sm') {
      main__inputResult.value = main__inputIn.value * 100;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'm' && Select_result.options[Select_result.selectedIndex].value == 'in') {
      main__inputResult.value = main__inputIn.value * 39.3701;  // очень важно поставить не запятую, а точку после целого числа, иначе будет округление
   } else if (Select_in.options[Select_in.selectedIndex].value == 'm' && Select_result.options[Select_result.selectedIndex].value == 'ft') {
      main__inputResult.value = main__inputIn.value * 3.28084;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'sm' && Select_result.options[Select_result.selectedIndex].value == 'sm') {
      main__inputResult.value = main__inputIn.value;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'sm' && Select_result.options[Select_result.selectedIndex].value == 'm') {
      main__inputResult.value = main__inputIn.value / 100;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'sm' && Select_result.options[Select_result.selectedIndex].value == 'in') {
      main__inputResult.value = main__inputIn.value * 0.393701;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'sm' && Select_result.options[Select_result.selectedIndex].value == 'ft') {
      main__inputResult.value = main__inputIn.value * 0.0328084;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'in' && Select_result.options[Select_result.selectedIndex].value == 'sm') {
      main__inputResult.value = main__inputIn.value * 2.54;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'in' && Select_result.options[Select_result.selectedIndex].value == 'm') {
      main__inputResult.value = main__inputIn.value * 0.0254;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'in' && Select_result.options[Select_result.selectedIndex].value == 'in') {
      main__inputResult.value = main__inputIn.value;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'in' && Select_result.options[Select_result.selectedIndex].value == 'ft') {
      main__inputResult.value = main__inputIn.value * 0.0833333;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'ft' && Select_result.options[Select_result.selectedIndex].value == 'sm') {
      main__inputResult.value = main__inputIn.value * 30.48;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'ft' && Select_result.options[Select_result.selectedIndex].value == 'm') {
      main__inputResult.value = main__inputIn.value * 0.3048;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'ft' && Select_result.options[Select_result.selectedIndex].value == 'in') {
      main__inputResult.value = main__inputIn.value * 12;
   } else if (Select_in.options[Select_in.selectedIndex].value == 'ft' && Select_result.options[Select_result.selectedIndex].value == 'ft') {
      main__inputResult.value = main__inputIn.value;
   } else {
      main__inputResult.value = "введите цифровое значение";
   }
};

main__inputIn.addEventListener('keyup', OnchangeFunc);
// Select_result.selectedIndex.addEventListener('onclick', OnchangeFunc);
