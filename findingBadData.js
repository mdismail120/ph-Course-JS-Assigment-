function findingBadData(number) {
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    let element = number[i];
    if (element < 0) {
      count++;
    }
  }
  return count;
}
console.log(findingBadData([20, 40, -20, -4, -50, 4, 2]));
