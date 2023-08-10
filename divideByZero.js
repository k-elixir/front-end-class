let firstNum = 10;
let secondNum = 10;
try {
  if (secondNum == 0) throw "division by zero is not allowed";
  console.log(firstNum / secondNum);
} catch (error) {
  console.log(error);
}
