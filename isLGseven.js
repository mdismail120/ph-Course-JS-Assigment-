function isLGSeven(number) {
  let finalNumber = number - 7;
  if (finalNumber < 7) {
    return finalNumber;
  } else {
    return number * 2;
  }
}
console.log(isLGSeven(-15));
