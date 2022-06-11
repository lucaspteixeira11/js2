const celular = {
    marcaCelular: Nokia, 
    tamanhoTela: {
        vertical: 155,
        horizontal: 70
    },
    bateria: 5000,
    ligar: function(){
        console.log('Fazendo ligação...')
    }
}
function criarCelular(marcaCelular,tamanhoTela,bateria){
    return {
        marcaCelular, 
        tamanhoTela,
        bateria,
        ligar(){
            console.log('Fazendo ligação...')
        }
    }
}
const celular1 = criarCelular('Nokia Tijolaço',10,5000);
console.log(celular1);
        
