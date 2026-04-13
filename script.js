// EXERCISE 1
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



// EXERCISE 2

class Pet {
    constructor(_name, _owner, _species, _breed) {
        this.name = _name;
        this.owner = _owner;
        this.species = _species;
        this.breed = _breed;
    }

    hasSameOwner = function(otherPet) {
        return this.owner === otherPet.owner
    }
}

const pets = [];
const petCardsDiv = document.getElementById("petCardsDiv");
const submitButton = document.getElementById("submitBtn");

submitButton.addEventListener("click", function (e) {

    e.preventDefault()
    let petName = document.getElementById("petName").value;
    let petOwner = document.getElementById("petOwner").value;
    let petSpecie = document.getElementById("petSpecie").value;
    let petBreed = document.getElementById("petBreed").value;

    let newPet = new Pet(petName, petOwner, petSpecie, petBreed);
    pets.push(newPet);

    const petCard = document.createElement("div");

    petCard.innerHTML = `
        <div class="card m-2" style="width: 100%;">
            <div class="card-body">
                <h5 class="card-title">${newPet.name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                owner: ${newPet.owner}
                </h6>
                <p class="card-text">
                specie: ${newPet.species}, <br>
                breed: ${newPet.breed}
                </p>
            </div>
        </div>
    `;

    petCardsDiv.appendChild(petCard);
});