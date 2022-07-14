// arrays são objetos

const genders = {
    male: "M",
    female: "F"
}

const persons = [
    {
        name: "Jaedson",
        gender: genders.male,
        age: 15
    },
    {
        name: "Maria",
        gender: genders.female,
        age: 24
    },
    {
        name: "Pedro",
        gender: genders.male,
        age: 32
    }
]

// filtrando homens
const males = persons.filter(person => person.gender === "M");
console.log(males);

// somando a idade de todos
const personsAge = persons.reduce((totalAge, person) => {
    totalAge += person.age;
    return totalAge;
}, 0);

console.log(personsAge);

// somando a idade de apenas homens
const malesAge = persons
                    .filter(person => person.gender === "M")
                    .reduce((age, person) => {
                        age += person.age;
                        return age;
                    }, 0); // "0" é o valor inicial de age

console.log(malesAge);