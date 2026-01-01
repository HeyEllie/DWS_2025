let nota1 = prompt("Digite a primeira nota: "); 
nota1 = eval(nota1);
let nota2 = prompt("Digite a segunda nota: "); 
nota2 = eval(nota2);
let nota3 = prompt("Digite a terceira nota: "); 
nota3 = eval(nota3);
//executa o código contido na string n1 e atribui o resultado de volta à variável n1. Isso é geralmente considerado perigoso, pois pode executar código malicioso se a string vier de uma fonte não confiável, mas pode ser útil para avaliar expressões matemáticas ou criar variáveis dinamicamente. 

const media_minima = 6.0;
let mensagem_final;
let media_final = (nota1 + nota2 + nota3) / 3;

/* if (media_final >= media_minima){
   mensagem_final = "Parabéns! Você foi aprovado com a média " + media_final + " final";
}else{
   mensagem_final = "Que pena! Você foi reprovado com a média " + media_final +" final";
} */

if (media_final >= 6){

    mensagem_final = "Parabéns! Você foi aprovado com a média " + media_final + " final";

} else if(media_final <=6 && media_final >= 4 || media_final === 4) {

    mensagem_final = "Que pena! Você está de recuperação com a média " + media_final + " final";

} else if (media_final < 4){

    mensagem_final = "Que pena! Você foi reprovado com a média " + media_final +" final";
    
}


console.log("----------testando-----------")
console.log(mensagem_final)
console.log("-----------------------------")
alert(mensagem_final)
