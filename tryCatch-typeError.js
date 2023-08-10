try {
  let error = "hello" ** [];
  console.log(error());
} catch (error) {
  console.log("error is not a function.");
}
