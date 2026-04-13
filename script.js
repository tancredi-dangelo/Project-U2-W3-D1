class User {
  constructor(_name, _lastName, _age, _location) {
    this.firstName = _name;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge = function(user1, user2) {
    if (user1.age === user2.age) {
        console.log("same age")
    } else if (user1.age > user2.age) {
        console.log(`${user1.firstName} ${user1.lastName} is older`)
    } else {
        console.log(`${user2.firstName} ${user2.lastName} is older`)
    }
  }
}

const x = new User("Pablo", "Escobar", 50, "Mexico");
const y = new User("Fidel", "Castro", 60, "Cuba");

x.compareAge(x, y);