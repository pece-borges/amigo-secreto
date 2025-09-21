//Array para armazenar os nomes
let amigos = [];

// Função para adicionar amigo 
function adicionarAmigo() {
    let input = document.getElementById("nome");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        input.value = "";
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = "";
} // aqui termina a função adicionarAmigo 

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
   // Função para sortear um amigo
   function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }
   
   let indice = Math.floor(Math.random() * amigos.length);
   let sorteado = amigos[indice];

   document.getElementById("resultado").textContent = "O amigo secreto sorteado é: " + sorteado + "!"; 
} // aqui termina a função sortearAmigo





