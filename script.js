let enderecos = [];

function adicionarEndereco() {
  const input = document.getElementById("endereco");
  const valor = input.value.trim();

  if (valor === "") {
    alert("Digite um endereço");
    return;
  }

  enderecos.push(valor);
  input.value = "";
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  enderecos.forEach((e, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${e}`;
    lista.appendChild(li);
  });
}

function gerarRota() {
  if (enderecos.length < 2) {
    alert("Adicione pelo menos dois endereços");
    return;
  }

  const url =
    "https://www.google.com/maps/dir/" +
    enderecos.map(e => encodeURIComponent(e)).join("/");

  window.open(url, "_blank");
}
