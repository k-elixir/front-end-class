let numbers = [1, 2, 3, 4, 5, 6, 7];
let oddNumbers = numbers.filter(function (number) {
  return number % 2 == 1;
});

console.log(oddNumbers);
