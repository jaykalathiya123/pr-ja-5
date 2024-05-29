let arr = [10, 20, 30];
let sum = 0;
let i
for ( i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("sum of for loop:",sum);

let array = [10, 20, 30];
let all = 0;
array.forEach((el) => all += el);
console.log("sum of for  foreach loop.:",all);

