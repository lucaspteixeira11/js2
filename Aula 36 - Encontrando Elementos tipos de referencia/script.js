

// const marcas = [
//     {id:1, nome:'a'},
//     {id:2, nome:'b'},
//     {id:3, nome:'c'}
// ];
// // find() retorna o valor do primeiro elemento do array que satisfaz o teste da função, e se não tiver, retorna undefined

// const marca = marcas.find(function(marca){
//     return marca.nome === 'a';
// });

// console.log(marca); 


















const placasDeVideo = [
    {marca:'NVIDEA', modelo: 'RTX 3070'},
    {marca:'NVIDEA', modelo: 'RTX 3080'},
];                      

const placa = placasDeVideo.find(function(placa){
    return placa.modelo === 'RTX 3080';
});
console.log(placa);