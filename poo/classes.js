class Animal {
    constructor(qtdPatas) {
        this.qtdPatas = qtdPatas;
    }
}

class Cachorro extends Animal {
    #name = ""; // atributo privado do nodejs

    constructor(morde) {
        super(4); // python: super().__init__()
        this.morde = morde
    }

    // métodos get e set
    set name(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }
}

const pug = new Cachorro(true);
console.log(pug);

pug.name = "Pug";
console.log(pug.name);