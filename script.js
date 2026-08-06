// O projeto : calculadora de IMC
/* Classificação
Abaixo de 18,5 a 24,9 - peso normal
24 a 29,9 - Sobrepeso
30 a 34,9 - Obesidade grau I
35 a 39,9 - Obesidade grau II
40 ou mais - Obesidade grau III */

let nome  = prompt('Qual é o seu nome?')
let pesoStr = prompt(` Olá, ${nome}! Qual é o seu peso em kg?\n(use a vírgula ou ponto - ex: 75,5 ou 75.5)`);
  let altStr = prompt(` Qual é a sua altura em metros?\n(use a vírgula ou ponto - ex: 1,75 ou 1.75)`)


 let peso = Number (pesoStr.replace(',', '.'));
let alt = Number (altStr.replace(',', '.'));

console.log('Nome:', nome);
console.log('Peso:', peso, typeof peso);
console.log('Altura:', alt, typeof alt);

let imc = peso / (alt * alt);
let imcFormatado = imc.toFixed(1);
let mensagem = '';

if (isNaN(peso) || isNaN(alt) || peso <= 0 || alt <= 0) {
} else if (imc < 18.5) {
    mensagem = `${nome}, seu IMC é ${imcFormatado} e você está abaixo do peso.`;
} else if (imc >= 18.5 && imc <= 24.9) {
    mensagem = `${nome}, seu IMC é ${imcFormatado} e você está com o peso normal.`;
} else if (imc >= 25 && imc <= 29.9) {
    mensagem = `${nome}, seu IMC é ${imcFormatado} e você está com sobrepeso.`;
} else if (imc >= 30 && imc <= 34.9) {
    mensagem = `${nome}, seu IMC é ${imcFormatado} e você está com obesidade grau I.`;
} else if (imc >= 35 && imc <= 39.9) {
    mensagem = `${nome}, seu IMC é ${imcFormatado} e você está com obesidade grau II.`;
} else if (imc >= 40) {
    mensagem = `${nome}, seu IMC é ${imcFormatado} e você está com obesidade grau III.`;
}

alert(mensagem);
console.log(mensagem);