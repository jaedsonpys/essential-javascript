// funções são objetos

// função padrão
function sayHello() {
    return "Hello";
}

console.log(sayHello());

// arrow function

// não precisa de chaves nem da keyword return neste caso
const sayWorld = () => "World";
const sayMsg = message => console.log(message);

console.log(sayWorld());
sayMsg("Hello world");