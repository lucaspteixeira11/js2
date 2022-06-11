 function VerificarEntrada(){
     NomeConvidado = document.getElementById('nm').value;
     ConvidadosJuca = ['Lucas','Giovanna','Túlio','Augusto','Luiza','Victor','Tiago'];
     if(ConvidadosJuca.includes(NomeConvidado)){
         document.getElementById('PermissaoDeEntrada').innerText = 'Ta liberado!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Sai fora!'
    }
 }