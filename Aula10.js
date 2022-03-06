//Parâmetros de função

function soma(num1, num2){ // declarei que a função irá receber dois parâmetros
    return num1 + num2; // retorna o resultado da soma dos dois parâmetros recebidos
}

console.log("O resultado da soma é: " + soma(3, 5)) // chamada da função dentro do console e passando os dois números a serem somados

//parâmetros x argumentos
//importante se atentar a ordem dos parâmetros informados

function nomeIdade(nome, idade){
    return `Meu nome é: ${nome} e minha idade é: ${idade}` //usando template string
}

console.log(nomeIdade("Leo", 28)) //chamada da fução que concatena

function multiplica(num1 = 1, num2 = 1){ // definindo 1 como valor padrão para caso não seja passado nenhum parâmetro para cálculo
    return num1 * num2;
}

console.log(`O resultado da multiplicação é: ${multiplica(soma(3, 5), soma(1, 2))}`) // chamada da função usando template string dentro do console