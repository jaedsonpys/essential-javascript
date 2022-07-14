// spreads

let membros = ["ombro", "joelhos"];
let musica = ["cabeça", ...membros, "e", "pés"];

console.log(musica);

// com funções
let args = [1, 2, 3];
function soma(x, y, z) {
    console.log(x + y + z)
}

soma(...args) // equivalente a *args do python
