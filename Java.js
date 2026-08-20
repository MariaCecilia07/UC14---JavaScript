//com if/else - 4 linhas
let Mensagem;
if (nota >= 6) {
    Mensagem = 'Aprovado';
} else {
    Mensagem = 'Reprovado';
}

//com ternário - 1 linha
const Mensagem = nota >= 6 ? 'Aprovado' : 'Reprovado';

let descricao = Temperatura > 30 ? 'quente' : 'agradável';
let tipo = Numero % 2 === 0 ? 'par' : 'ímpar';
let Saudacao = hora < 12 ? 'bom dia' : 'boa tarde/noite';