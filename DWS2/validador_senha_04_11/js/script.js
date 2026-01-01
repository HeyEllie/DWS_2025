/* =============================================
Exercício: Validador de Senha (JS)
=============================================
*/
// --- 1. CONEXÃO COM O DOM (Pilar 1) ---
// Precisamos "segurar" os 3 elementos que definimos no HTML.
// [LACUNA 5]
// Encontre o elemento <input> de senha usando o ID dele.
const inputSenha = document.getElementById("campo-senha");
// [LACUNA 6]
// Encontre o elemento <button> usando o ID dele.
const botaoVerificar = document.getElementById("btn-verificar");
// [LACUNA 7]
// Encontre o elemento <p> de mensagem usando o ID dele.
const elementoMensagem = document.getElementById("msg-feedback");
// --- 2. OUVINTE DE EVENTO (Pilar 4) ---
// [LACUNA 8]
// Estamos anexando uma função ao evento de "clique" do botão.
// Quando o botão for clicado, o código dentro de function() {} será executado.
botaoVerificar.onclick = function () {
        // --- 3. LÓGICA E OPERADORES (Pilar 2) ---
        // 3a. Ler o valor que foi digitado no <input>
        // [LACUNA 9]
        // Usamos a propriedade '.value' para ler o texto de dentro do input.
        const senhaDigitada = inputSenha.value;
        // 3b. Obter o comprimento (quantidade de caracteres) da senha
        const comprimentoSenha = senhaDigitada.length;
        // 3c. Tomar a decisão (if/else)
        // A regra é: 8 ou mais caracteres é FORTE.
        if (comprimentoSenha >= 8) {
            // --- 4. MANIPULAÇÃO (Pilar 3) ---
            // (Caminho 1: Senha Forte)
            // [LACUNA 10]
            // Mude o texto (HTML interno) do elemento de mensagem.
            elementoMensagem.innerHTML = "SENHA FORTE!";
            // [LACUNA 11]
            // Mude o estilo (cor) do elemento de mensagem.
            elementoMensagem.style.color = "green";
        } else {
            // --- 4. MANIPULAÇÃO (Pilar 3) ---
            // (Caminho 2: Senha Fraca)
            // [LACUNA 12]
            // Mude o texto (HTML interno) do elemento de mensagem.
            elementoMensagem.innerHTML = "SENHA FRACA! (Mín. 8 caracteres)";
            // [LACUNA 13]
            // Mude o estilo (cor) do elemento de mensagem.
            elementoMensagem.style.color = "red";
        }
    }