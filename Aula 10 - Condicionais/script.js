//if ... Else

//Se a hora estiver entre  06:00 até 12:00 : Bom dia!
//Se estiver entre 13:00 até 18:00 : Boa tarde! 
//Caso contrário : Boa noite!
let hora = 6;
if(hora >= 6 && hora <= 12){
    console.log('Bom dia mundo!');
} else if(hora > 12 && hora <= 18){
    console.log('Boa tarde, acordou atrasado,hein!');
} else {
    console.log('Boa noite, hora da soneca meu guerreiro!');
}
