
class Dog {
    constructor(newName, newBreed, newCollar, newAge, newCuteness = true){
        this.name = newName;
        this.breed = newBreed;
        this.collar = newCollar;
        this.age = newAge;
        this.cuteness = newCuteness;

        Dog.numberOfDogs++;
    }

    // Private variable
    static #numberOfDogs = 0;

    // Getter
    static get numberOfDogs() {
        return Dog.#numberOfDogs;
    }

    // Setter
    static set numberOfDogs(newValue) {
        throw new NumberOfDogsError();
    }

    bark() {
        console.log("Woof! I am " + this.name);
        throw new BarkError(this.name, this.breed);
    }
}

class NumberOfDogsError extends Error {
    constructor() {
        super("Cannot modify the number of dogs unless you're creating a dog via the Dog constructor");
    }
}

let fido = new Dog("Fido", "Frenchie", "Leather", 7);

console.log(Dog.numberOfDogs);

// console.log(fido);
// console.log(fido.cuteness);

// fido.bark();


class BarkError extends Error {
    constructor(dogName, dogBreed) {
        super(`${dogName} of breed ${dogBreed} failed to bark.`);
    }
}

try {
    fido.bark();
} catch (error) {
    // throw new BarkError(fido.name, fido.breed);
    if (error instanceof BarkError) {
        console.log("Bark error occured.")
    }
}