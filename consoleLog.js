let person = {
  firstName: "Kimia",
  lastName: "Rafi",
  age: 23,
};
console.log(person);

person["firstName"] = "Kim";
person.age = 25;
console.log(person);

person["city"] = "Oslo";
person.country = "Iran";
console.log(person);
