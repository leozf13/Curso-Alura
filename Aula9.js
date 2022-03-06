
let teste = " ";
console.log(teste)
teste = "Oi";

//DECLARAÇÃO DE FUNÇÃO --->
function impremeTexto(texto){ //Declarando a função para imprimir um texto
    console.log(texto)
}

impremeTexto(teste); //chamada da função
impremeTexto("Resultado é: " + soma());


function soma(){ // Sempre importante dar um return ao final da função pois os valores ficam presos dentro do bloco da função
    return 3 + 3;
}


console.log(soma())