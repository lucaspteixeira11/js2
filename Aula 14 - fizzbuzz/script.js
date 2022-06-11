//Valor divisível por 3 => Fizz
//Valor divisível por 5 => Buzz
//Valor divisível por 3 e 5 => Fizzbuzz
//Não divisível por 3 e 5 => entrada
//Não é um númeor => 'Não é um número'
const resultado = fizzBuzz(2);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}