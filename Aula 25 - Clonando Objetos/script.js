const celular = {
    marcaCelular: 'Asus',
    telaCelular: 'iPS',
    capacidadeBateria: 10000,
    ligar: function(){
    console.log('Ligando...');
    }
}    

const novoObjeto = Object.assign({
    paisFabricante: 'China'
},celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2);