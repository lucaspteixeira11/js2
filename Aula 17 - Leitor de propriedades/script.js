//Criar um método para let propriedades de um obejeto
//Exibir somete as propriedades do tipo string que estão nesse objeto


const filme = {
    titulo: 'Doutor Estranho no Multiverso da loucura',
    ano : 2022,
    diretor: 'Sam Raimi',
    personagem: 'Doutor Estranho'
}
exibirPropriedades(filme);
function exibirPropriedades(objeto){
for (prop in objeto){
    if (typeof objeto[prop] === 'string'){
        console.log(prop,objeto[prop])
    }
}
    }