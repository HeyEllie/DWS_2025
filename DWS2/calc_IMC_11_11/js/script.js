// 1. Identificação
const NOME_DO_ALUNO = "Seu Nome Completo Aqui"; // Substitua pelo seu nome completo

// 2. Conexão com o DOM
const inputPeso = document.getElementById('peso');
const inputAltura = document.getElementById('altura');
const btnCalcular = document.getElementById('btn-calcular');
const paragrafoResultado = document.getElementById('resultado');

// 3. Ouvinte de Evento
btnCalcular.onclick = function() {
    // Todo o restante da lógica fica aqui dentro

    // 4. Lógica da Função onclick:

    // Validação (Desafio):
    if (inputPeso.value === "" || inputAltura.value === "") {
        paragrafoResultado.innerHTML = "Por favor, preencha todos os campos.";
        paragrafoResultado.className = "resultado-cuidado";
        return; // Para a função aqui se houver erro
    }

    // Processamento (Se a validação passar):
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);
    const imc = peso / (altura * altura);

    // Lógica de Decisão:
    let mensagem;
    let classeCss;

    if (imc < 18.5) {
        mensagem = "Abaixo do Peso";
        classeCss = "resultado-atencao";
    } else if (imc >= 18.5 && imc <= 24.9) {
        mensagem = "Peso Normal";
        classeCss = "resultado-bom";
    } else if (imc >= 25.0 && imc <= 29.9) {
        mensagem = "Sobrepeso";
        classeCss = "resultado-atencao";
    } else { // 30.0 ou mais
        mensagem = "Obesidade";
        classeCss = "resultado-cuidado";
    }

    // Manipulação (Saída):
    // Requisito de Saída: [NOME_DO_ALUNO], seu IMC é [Valor do IMC]. Classificação: [Mensagem].
    paragrafoResultado.innerHTML = `${NOME_DO_TUBAINA}, seu IMC é ${imc.toFixed(2)}. Classificação: ${mensagem}.`;
    
    // Aplica a classeCss correta
    paragrafoResultado.className = classeCss;
};



































// function validarForm() {
  //var nome = document.getElementById("nome").value;
  //if (nome == "") ou 0 {
   // alert("O campo nome não pode estar vazio.");
   // return false; // Impede o envio do formulário
 // }
  //return true; // Permite o envio do formulário
//} 