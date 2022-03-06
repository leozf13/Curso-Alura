//Aula 12
// Arrow Function

function soma(num1, num2){
    return num1 + num2;
}

console.log(`O resultado da soma é: ${soma(3, 5)}`)

//Arrow function, 2015, não precisa de chave, nem return, não tem como ser nomeada, sempre usada com uma const
//const somaPorra = (num1, num2) => num1 + num2;  
//console.log(`A soma da função flecha é: ${somaPorra(23, 45)}`)

//Arrow function com mais de uma linha de instrução
const somaNumerosPequenos = (numP, numP2) => {
    if((numP) && (numP2) > 10){
        return "Somente números pequenos, irmão!";
    }else if(numP && numP2 < 10){
        return numP + numP2;
    }
}

console.log(`A soma de números pequenos é: ${somaNumerosPequenos(6, 18)}`)

//Hoisting arrow function se comporta com expressão de função
