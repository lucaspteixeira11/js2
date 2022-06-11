//Operadores aritiméticos
//+, -, *, /, **
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario / salario);
console.log(salario * salario);
console.log(5 ** 5);

//++,--
let idade = 18;
console.log(++idade);
// console.log(idade++);
// console.log(idade);

//Operadores atribuição
//valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

//Operadores de igualdade
//Igualdade estrita
console.log(1===1);
console.log('1'===1); //Utilizar essa

//Igualdade solta
console.log(1==1);
console.log('1'==1);

//Operadores ternários
let pontos = 100;
let tipo = pontos >= 100 ? 'premium' : 'comum';
console.log(tipo);

//Operadores Lógicos 'e' (&&)
//Retonar TRUE se os dois operandos forem true
console.log(true && true);
console.log(true && false);

let maiorDeIdade = true;
let carteiraDeTrabalho = true;
//let carteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade && carteiraDeTrabalho;
console.log('pode aplicar:',podeAplicar);

//Operador Lógico 'ou' (||)
//Retornar true se um dos operandos forem true
let engenharia = true;
let inglesAvançado = false;
let empreguinhoGarantido = engenharia || inglesAvançado;
console.log(empreguinhoGarantido);

//Operador 'NOT' (!)
let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado:',candidatoRecusado);

//Operadores Bitwise

