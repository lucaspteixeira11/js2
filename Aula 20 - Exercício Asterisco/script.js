//Criar uma função que exibe a quantidade de * que aquela linha possui

exibirAsteriscos(10);

function exibirAsteriscos(linhas){
    // let normal = '';
    // for(let l=1;l<=linhas;l++){
    //     normal += '*';
    //     console.log(normal);
        for(let l=1;l<=linhas;l++){
            let padrao = '';
            for(let i=0;i<l;i++){
                padrao += '*';
            }
            console.log(padrao);
        }

    }
