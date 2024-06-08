
let array = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

function Prime(num) {
  for (let i = 1; num > i; i++) {
    if (num % i == 0) {
      return true;
    }
  }
  return num > 0;
}

console.log(array.filter(Prime));


