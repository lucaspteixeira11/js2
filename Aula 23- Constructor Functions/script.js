//Pascal Case - UmDoisTresQuatro
// function Celular(marcaCelular,tamanhoTela,bateria){
//     this.marcaCelular = marcaCelular,
//     this.tamanhoTela = tamanhoTela,
//     this.bateria = bateria,
//     this.ligar = function(){
//             console.log('Fazendo Ligação...');
//     }
// }

// const celular = new Celular('apple',5.5,5000);
// console.log(celular);







function Celular(marcaCelular,tamanhoTela,bateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela  = tamanhoTela,
    this.bateria = bateria,
    this.ligar = function(){
        console.log('Ligando...');
    }
}

const celular = new Celular('Samsung',7.0,10000);
console.log(celular);












