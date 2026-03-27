// Pegando elementos
const input = document.getElementById("tarefa");
const botao = document.getElementById("btnAdicionar");
const lista = document.getElementById("lista");

// Evento de clique
botao.addEventListener("click", adicionarTarefa);

// Função principal
function adicionarTarefa() {
  const texto = input.value.trim();

  // Se estiver vazio, não faz nada
  if (texto === "") return;

  // Criar item da lista
  const li = document.createElement("li");

  // Criar texto
  const span = document.createElement("span");
  span.textContent = texto;

  // Marcar como concluído
  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // Botão remover
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "X";

  btnRemover.addEventListener("click", () => {
    li.remove();
  });

  // Montar estrutura
  li.appendChild(span);
  li.appendChild(btnRemover);

  lista.appendChild(li);

  // Limpar input
  input.value = "";
}