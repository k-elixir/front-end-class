let person = {
  firstName: "Kimia",
  lastName: "Rafi",
  age: 23,
  city: "Rasht",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
