// Maneira ruim de fazer looping 
//  console.log('estou aprendendo');
//  console.log('estou aprendendo');
//  console.log('estou aprendendo');
//  console.log('estou aprendendo');
//  console.log('estou aprendendo');

// 1.For
// for (let i = 0; i <= 5; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// for (i = 5; i >= 1; i--){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// 2.While
// let i = 5;
// while(i >= 1){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
//     i--;
// }

// 3. DO...While
// i = 0;
// do {
//     console.log('digitando!');
//     i++;
// }while(i < 10)

// 4.For...in
const pessoa = {
    nome: 'Lucas',
    idade: 25
};
//key-value
for (let chave in pessoa){
    console.log(chave,pessoa['nome']);
}
const cores = ['Vermelho','Azul','Rosa'];
for (let indice in cores){
    console.log(indice,cores[indice]);
}

// 5.For...of 
for (let cor of cores){
    console.log(cor);
}