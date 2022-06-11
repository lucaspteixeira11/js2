// Objeto endereço 

//Criar um objeto endereço que contem: Rua, Cidade, CEP e função: exibirEndereço(endereco)

let endereco = {
    Rua: 'Benedito Ernesto Guimarães',
    Cidade: 'Santos',
    CEP: '11070021',
};
function exibirEndereço(endereco){
    for(let lugar in endereco){
        console.log(lugar,endereco[lugar]);
    }
}
exibirEndereço(endereco);