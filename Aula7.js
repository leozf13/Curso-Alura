//Operador Ternario
// É um IF, faz comparação em uma linha

const idadeMinima = 18;
const cliente = 28;
const clienteDois = 15;

if(cliente >= idadeMinima){  //If tradicional
    console.log("Autorizado");
}else{
    console.log("Não autorizado");
}

console.log(clienteDois >= idadeMinima ? "Autorizado" : "Não Autorizado") //If ternário| primeiro vem a condição, depois as saídas, primeiro true, depois false| Chama-se ternário porque possui 3 operadores em uma mesma linha