//Falsy
//undefined
//null
//0
//false
//''
//NaN - not a number
false || true;
false || 'rafael';
false || 1;

//Truthy

//let corPersonalizada = 'vermelho';
let corPersonalizada = '';
let corPadrao = 'azul';
let corDoPerfil = corPersonalizada || corPadrao;
console.log(corDoPerfil);
