
const primeiroNumero = 10;
const segundoNumero = 5;


console.log('Soma:', primeiroNumero + segundoNumero);
console.log('Subtração:', primeiroNumero - segundoNumero);
console.log('Multiplicação:', primeiroNumero * segundoNumero);
console.log('Divisão:', primeiroNumero / segundoNumero);


const numero = 8;


console.log('Dobro:', numero * 2);
console.log('Triplo:', numero * 3);


const nome = prompt('Digite seu nome:');
const idade = prompt('Digite sua idade:');


console.log(`Olá, ${nome}! Seja bem-vindo! Você tem ${idade} anos.`);


const nota1 = Number(prompt('Digite sua primeira nota:'));
const nota2 = Number(prompt('Digite sua segunda nota:'));
const nota3 = Number(prompt('Digite sua terceira nota:'));
const media = (nota1 + nota2 + nota3) / 3;


console.log('Média:', media);


const usuarioCorreto = 'cecimineblox';
const senhaCorreta = '2026';
const usuario = prompt('Faça seu login:');
const senha = prompt('Digite sua senha:');


if (usuario !== usuarioCorreto) {
    console.log('Usuário incorreto.');
} else if (senha !== senhaCorreta) {
    console.log('Senha incorreta.');
} else {
    console.log('Login realizado com sucesso!');
}


const numero1 = Number(prompt('Digite o primeiro número:'));
const numero2 = Number(prompt('Digite o segundo número:'));

console.log('Número maior');
if (numero1 > numero2) {
    console.log('O maior número é', numero1 + '.');
} else if (numero2 > numero1) {
    console.log('O maior número é', numero2 + '.');
} else {
    console.log('Os números são iguais.');
}