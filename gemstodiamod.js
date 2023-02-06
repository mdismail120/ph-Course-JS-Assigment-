function gemsToDiamod(friend1, friend2, friend3) {
  let firstFrnd = friend1 * 21;
  let secondFrnd = friend2 * 32;
  let thirdFrnd = friend3 * 43;
  let totalNumber = firstFrnd + secondFrnd + thirdFrnd;
  if (totalNumber >= 1000 * 2) {
    return (totalNumber -= 2000);
  } else {
    return totalNumber;
  }
}

console.log(gemsToDiamod(20, 200, 50));
