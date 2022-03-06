//Template Strings| String Modelo
const nome = "Leo";
const idade = 14;
const cidade = "Campo Mourão";

const bebidaMaior = "Cerveja";
const bebidaMenor = "Suco";

//const apresenta = "Meu nome é: " + nome;

const apresenta = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidade}`; // Template string, aceita quebra de linha e é mais fácil de ler

console.log(apresenta); //concatenação 


const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"` // usando operador ternário dentro de um template string
console.log(pedido)
