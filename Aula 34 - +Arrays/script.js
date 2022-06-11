//Add elementos a um array
const numeros = [1,2,3];

//Inicio
numeros.unshift(0);
//Meio
numeros.splice(1,0,'a'); //Posição/numero a ser deletado/Elemento add
//Fim
numeros.push(7);
console.log(numeros);