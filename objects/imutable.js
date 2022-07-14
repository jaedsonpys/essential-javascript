// imutavel
const user = {
    name: "jaedson"
}

// deixa as propriedades imutaveis
Object.freeze(user);
console.log(user);

user.name = "joão";
console.log(user);

// não permite recriar o objeto
user = [];