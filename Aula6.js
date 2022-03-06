//Aula 06

// == comparação implícita
const numero = 5;
const texto = "5";

console.log(numero == texto) // compara apenas o conteúdo da variável
console.log(numero === texto) // compara o conteúdo e tipo de dado da variável

//typeof descobrir o tipo de dado salvo na variável

console.log(typeof numero)
console.log(typeof texto)


//por boas práticas usar sempre o método de 3 iguais ===

/*  
||: Operador “ou”, retorna true caso uma condição seja válida; 
&&: Operador “e”, retorna true somente se todas as condições forem válidas;
!= e !==: Operadores “não igual” e “estritamente não igual”, utilizados para comparação, da mesma forma que == e === retornam true ou false.
*/