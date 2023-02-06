function mindGame(number) {
  let numbers = number * 3;
  let totalNumber = numbers + 10;
  totalNumber = totalNumber / 2;
  totalNumber = totalNumber - 5;
  return totalNumber;
}
let checkNumber = mindGame(5);
console.log(checkNumber);
