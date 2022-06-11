// Criar um array de obejetos de faixa de preço para que ela possa ser usado em um site igual o ML
// Faixas, tooltip, min e max

//primeira opção
let faixas = [
    {tooltip: 'Até R$700',minimo: 0,maximo:700},
    {tooltip: 'de R$700 à R$1000',minimo: 700,maximo:1000},
    {tooltip: 'R$ 1000 ou mais',minimo: 1000,maximo:99999999}
];
// Segunda opçõa(Factory function)
function criarFaixaDePreco(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixas2 = [
    criarFaixaDePreco('a',0,700),
    criarFaixaDePreco('b',700,1000),
    criarFaixaDePreco('c',1000,99999)
]

//Opção 3 (Constructor Function)

function CriarOutroPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixas3 = [
    new CriarOutroPreco('d',0,700),
    new CriarOutroPreco('e',700,1000), 
    new CriarOutroPreco('f',1000,9999999) 
];
console.log(faixas);
console.log(faixas2);
console.log(faixas3);