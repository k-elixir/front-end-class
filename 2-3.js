let number = 2;
if (number > 0) {
  if (number % 2 == 0) {
    alert("number is even and positive");
  } else {
    alert("number is positive but not even");
  }
} else if (number < 0) {
  if (number % 2 == 0) {
    alert("number is even but not positive");
  } else {
    alert("number is not even and positive");
  }
} else {
  alert("number is 0");
}
