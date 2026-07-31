
let produto = prompt("Digite o nome do produto:");
let precoOriginal = parseFloat(prompt("Digite o preço original do produto:"));
let percentualDesconto = parseFloat(prompt("Digite o percentual de desconto (%):"));


let valorDesconto = precoOriginal * (percentualDesconto / 100);
let precoFinal = precoOriginal - valorDesconto;




console.log("Produto:", produto);
console.log("Preço Original: R$ " + precoOriginal.toFixed(2));
console.log("Desconto: " + percentualDesconto + "%");
console.log("Valor do Desconto: R$ " + valorDesconto.toFixed(2));
console.log("Preço Final: R$ " + precoFinal.toFixed(2));


alert(
    "Produto: " + produto +
    "\nPreço Original: R$ " + precoOriginal.toFixed(2) +
    "\nValor do Desconto: R$ " + valorDesconto.toFixed(2) +
    "\nPreço Final: R$ " + precoFinal.toFixed(2)
);
