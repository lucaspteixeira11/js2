const data1 = new Date();
const data2 = new Date('February 28 2022 16:31');
//javascript date google
const data3 = new Date(2022,01,28,4,33);
data3.setFullYear(2030);
data2.toDateString(); //Dia atual 
data1.toTimeString(); //Horário
data2.toISOString(); //Conversão de data para passar ao servidor
