const propriedadesCel = {
    marcaCel: 'Apple',
    tamanhoTela:{
        vertical: 5.5,
        horizontal: 7
    },
    capacidadeDaBateria: 5000,
ligar: function(){
console.log('Realizando Ligação...');
    }   
}
const objetoNovo = Object.assign({
    tipoTela: 'IPS'
},propriedadesCel);
console.log(objetoNovo);

const objetoNovoDemais = {...propriedadesCel};
console.log(objetoNovoDemais);