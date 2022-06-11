//Velocidade máxima de 70
//a cada 5km acima do limite você ganha 1 ponto
//Math.floor()
//caso pontos maior que 12 -> 'Carteira suspensa'

verificarVelocidade(130);

function verificarVelocidade(velocidade){
const velocidadeMaxima = 70;
const km = 5;
    if (velocidade <= velocidadeMaxima){
    console.log('Velocidade permitida');
} else {
    const pontos = Math.floor(((velocidade - velocidadeMaxima)/km));
    if (pontos >= 12){
        console.log('Carteira suspensa');
    } else {
        console.log('Pontos',pontos);
    }
}


}

