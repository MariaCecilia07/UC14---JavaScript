// 1. Temperatura atual de exemplo
const temperatura = 27;

// 2. Selecionar elementos do HTML
const pagina = document.getElementById('pagina');
const emojiEl = document.getElementById('emoji');
const saudacaoEl = document.getElementById('saudacao');
const horarioEl = document.getElementById('horario');

// 3. Definir o clima e a mensagem
let turno = '';
let emojiStr = '';
let msg = '';

if (temperatura < 10) {
  turno = 'frio';
  emojiStr = '🥶';
  msg = 'Está muito frio!';
} else if (temperatura < 25) {
  turno = 'ameno';
  emojiStr = '🌤️';
  msg = 'Está agradável!';
} else if (temperatura < 32) {
  turno = 'quente';
  emojiStr = '☀️';
  msg = 'Está quente!';
} else {
  turno = 'extremo';
  emojiStr = '🔥';
  msg = 'Está muito quente!';
}

// 4. Atualizar o conteúdo da página
pagina.classList.add(turno);
emojiEl.textContent = emojiStr;
saudacaoEl.textContent = msg;
horarioEl.textContent = `Temperatura atual: ${temperatura}°C.`;

// 5. Log para o desenvolvedor
console.log(`Temperatura: ${temperatura}°C, Clima: ${turno}, Mensagem: ${msg}`);