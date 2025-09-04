const nome = prompt("Qual é o seu nome?");
const saudacaoDiv = document.getElementById("saudacao");

if (nome) {
    saudacaoDiv.textContent = `Olá, ${nome}!`;
} else {
    saudacaoDiv.textContent = "Olá, visitante!";
}

saudacaoDiv.classList.add("mensagem-saudacao");
