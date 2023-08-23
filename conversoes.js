//Tipos de dados
//Booleanos

//CONVERSÕES IMPLÍCITAS

const numero = 456;
const numeroString = "456";

//console.log(numero === numeroString); => False (Número e string)

//console.log(numero == numeroString); => True (Transforma o número em string, pode gerar bugs)

//console.log(numero + numeroString); => 456456 (Ele se torna uma String e é juntada uma a outra)

//Number(numeroString) => Converto o dado string em número;

//String(numero) => Converto o dado numero em string;

console.log(numero + Number(numeroString)); //Realiza a soma dos dois números = 912.
