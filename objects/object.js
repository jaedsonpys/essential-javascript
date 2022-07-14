const user = {
    name: "Jaedson",
    age: 15
};

// imprime as chaves do objeto
console.log(Object.keys(user));

// imprime os valores do objeto
console.log(Object.values(user));

// imprime um array de arrays com chave e valor
console.log(Object.entries(user));

// extende um objeto
// uma boa prática e criar um novo objeto,
// pois as antigas propriedades seriam alteradas
const newUser = Object.assign({}, user, {local: "Brazil"})
// ou: const newUser = Object.assign(user, {local: "Brazil"})

console.log(newUser)