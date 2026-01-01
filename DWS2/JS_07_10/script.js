// 1. DECLARANDO A FUNÇÃO
// Uma 'function' (função) é um bloco de código que realiza uma tarefa específica.
// Damos a ela o nome 'mudarTexto', o mesmo nome que usamos no 'onclick' do nosso botão no HTML.
function mudarTexto() {

 // 2. A LÓGICA DA MANIPULAÇÃO - Onde a mágica acontece!
 // Esta linha de código faz três coisas, vamos ler da direita para a esquerda:
 // c) Define o NOVO CONTEÚDO que queremos mostrar.
 // "Olá, JavaScript!"

 // b) Acessa a propriedade 'innerHTML', que representa o conteúdo HTML DENTRO de um elemento.
 // .innerHTML = "Olá, JavaScript!"
 // a) Encontra o elemento HTML que queremos manipular.
 // 'document' representa a página HTML inteira.
 // '.getElementById("titulo-principal")' é o comando para "Encontre o elemento com o id='tituloprincipal'".
 document.getElementById("titulo-principal").innerHTML = "Olá, JavaScript!";
 // Em resumo, a linha inteira diz:
 // "Neste documento, encontre o elemento com o ID 'titulo-principal' e mude o conteúdo HTML dele para 'Olá, JavaScript!'".
}
//let: para valores mutáveis
//const: para valores constante. Ex. o num. pi, ele não muda.