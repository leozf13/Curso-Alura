
//Aula conversão implícita e explícita

const texto = "Olá";
const numero = 28;

//explícita
console.log("Explícita: " + texto + " " + String(numero));

//Implicita

console.log("Implícita: " + texto + numero)

//explícita NaN

console.log("Explícita NaN: " + numero + Number(texto))

//testando comparações
if(texto === "Oláaaa"){

    console.log(texto);
}else{

    console.log(numero);
}
