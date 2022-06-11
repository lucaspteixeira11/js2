const filme = {
    titulo: 'Filme do Pelé',
    ano: 1980,
    diretor: 'Chaves',
    personagem: 'Pelé, o próprio'
}

exibirPropriedades(filme);
function exibirPropriedades(obj){
    for(prop in obj){
        if(typeof obj[prop] === 'string'){
            console.log(prop,obj[prop]);
        }
    }
}