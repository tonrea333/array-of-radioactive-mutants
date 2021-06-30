/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(name) {//adds "Colin" to the end of a given array
  name.push("Colin")
  console.log(name)
}
function addMeToStart(name) {//adds "Colin" to the start of a given array
  name.unshift("Colin")
}
function changeLast(number, newNumber) {//changes the last element in the given array to the given value
  number.pop()
  number.push(newNumber);
  console.log(number)
  return number
}

function changeAllValuesTo(number, newValue) {//changes every value in the given array to the given value
  console.log(number);
  console.log(newValue);
  while (number[0] !== newValue){//Note if newValue is in array this may not work
    if (number[0] !== newValue) {
      number.shift();
      number.push(newValue);
      console.log(number)
    }
  }
}
function oddOrEven(number){
  console.log(number);

let numberEven = number % 2
let numberOdd = number
numberDivisable = "odd"
console.log(numberDivisable)
} 

function changeNextThreeToValue(initialValue, numberList, changeValue){
  console.log(initialValue)
  console.log(numberList)
  console.log(changeValue)
}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
