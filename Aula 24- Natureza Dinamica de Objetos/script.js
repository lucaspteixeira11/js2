//Natureza Dinamica de objetos
const mouse = {
    cor: 'vermelho',
    marca:'logitech'
}
mouse.velocidade = 5000;
mouse.trocarDPI = function(){
 console.log('mudando DPI');
}
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse);