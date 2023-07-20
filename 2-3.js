let number = 2;
if (number > 0) {
  if (number % 2 == 0) {
    console.log("number is even and positive");
  } else {
    console.log("number is positive but not even");
  }
} else if (number < 0) {
  if (number % 2 == 0) {
    console.log("number is even but not positive");
  } else {
    console.log("number is not even and positive");
  }
} else {
  console.log("number is 0");
}
