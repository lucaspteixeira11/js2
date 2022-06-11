//Criar uma função para mostrar os números primos
//Primos
//Compostos

exibirNumerosPrimos(15);
function exibirNumerosPrimos(limite){
    for(let n = 2;n <= limite;n++){
        
    if(numeroPrimo(n)) console.log(n);
    }
}
function numeroPrimo(n){
    
        for(let divisor = 2; divisor < n;divisor++){
            if(n % divisor === 0){
            return false;
            }
        }
        return true;
    }