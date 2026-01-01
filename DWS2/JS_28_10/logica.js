/* ======================================
 Exercício: Verificador de Idade
 ======================================
*/
// --- 1. DECLARAÇÃO DE VARIÁVEIS ---
// Usamos 'const' (constante) porque o valor da maioridade não muda.
const IDADE_MINIMA_PARA_DIRIGIR = 18;
// Usamos 'let' porque a idade do usuário é um valor que pode mudar.
// Tente alterar este número (para 15, 20, 18) e veja o resultado mudar!
let idadeUsuario = 25;
// Usamos 'let' para a mensagem, pois ela será definida pela nossa lógica.
let mensagemResultado;
// --- 2. A LÓGICA DE DECISÃO (if/else) ---
// Aqui, o JavaScript "pergunta":
// A "idadeUsuario" (25) é MAIOR OU IGUAL (>=) a "IDADE_MINIMA_PARA_DIRIGIR" (18)?
// A resposta para 25 >= 18 é VERDADEIRA (true).
if (idadeUsuario >= IDADE_MINIMA_PARA_DIRIGIR) {

 // Como a condição foi VERDADEIRA, o código deste bloco {} é executado.
 // Guardamos o texto de sucesso na nossa variável de mensagem.
 mensagemResultado = "Você tem " + idadeUsuario + " anos. Parabéns, você pode dirigir!";
} else {

 // Se a condição fosse FALSA (ex: se idadeUsuario fosse 15),
 // este bloco {} seria executado.
 mensagemResultado = "Você tem " + idadeUsuario + " anos. Você ainda não pode dirigir.";
}
// --- 3. EXIBINDO O RESULTADO ---
// 3.1. Saída para o Programador (Console)
// Esta mensagem aparecerá no console do desenvolvedor (Pressione F12).
// É excelente para testar e depurar seu código.
console.log("--- Teste de Lógica ---");
console.log(mensagemResultado);
console.log("-----------------------");
// 3.2. Saída para o Usuário (Alert)
// Esta mensagem aparecerá como um pop-up na tela para o usuário.
// É uma forma simples de dar feedback sem mexer no HTML.
alert(mensagemResultado);