/* ===================================================
Exercício Guiado: Painel de Controle
===================================================
*/
/* PILAR 1: DOM (Conexão com o HTML)
Vamos "encontrar" e "segurar" todos os elementos que
precisamos manipular ou ouvir.
Usamos 'const' porque essa conexão com o elemento não vai mudar.
*/
// Encontrando o display de status pelo seu ID
const display = document.getElementById("status-display");
// Encontrando os 3 botões pelos seus IDs
const botaoPermitir = document.getElementById("btn-permitir");
const botaoNegar = document.getElementById("btn-negar");
const botaoResetar = document.getElementById("btn-resetar");
/*
PILAR 2 e 4: EVENTOS e MANIPULAÇÃO
Agora, vamos anexar "ouvintes de eventos" a cada botão.
Usaremos a propriedade '.onclick' para dizer ao JS
qual função executar QUANDO o botão for clicado.
*/
// --- Evento do Botão PERMITIR ---
botaoPermitir.onclick = function () {
    // 1. MANIPULAÇÃO de Conteúdo (.innerHTML)
    // Muda o texto dentro do display.
    display.innerHTML = "ACESSO PERMITIDO";
    // 2. MANIPULAÇÃO de Estilo (CSS)
    // Para mudar o estilo, mexemos no '.className'.
    // Trocamos a classe 'display-neutro' pela 'display-permitido'.
    display.className = "display-permitido";
    console.log("Status alterado para: PERMITIDO");
};
// --- Evento do Botão NEGAR ---
botaoNegar.onclick = function () {
    // 1. MANIPULAÇÃO de Conteúdo (.innerHTML)
    display.innerHTML = "ACESSO NEGADO";
    // 2. MANIPULAÇÃO de Estilo (CSS)
    // Trocamos a classe pela 'display-negado'.
    display.className = "display-negado";
    console.log("Status alterado para: NEGADO");
};
// --- Evento do Botão RESETAR ---
botaoResetar.onclick = function () {
    // 1. MANIPULAÇÃO de Conteúdo (.innerHTML)
    display.innerHTML = "AGUARDANDO...";
    // 2. MANIPULAÇÃO de Estilo (CSS)
    // Voltamos para a classe original.
    display.className = "display-neutro";
    console.log("Status resetado para: AGUARDANDO");
};