let firstNum = 10;
let secondNum = 0;
try {
  if (secondNum == 0) throw new Error("division by zero is not allowed");
  console.log(firstNum / secondNum);
} catch (error) {
  console.log(error);
}
