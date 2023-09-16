import PromptSync from "prompt-sync";   

const prompt = PromptSync()

function encontrarMaiorMenor() {
  const lista = [];

  while (true) {
    const numero = parseFloat(prompt('Digite um número (ou qualquer letra para sair): '));

    if (isNaN(numero)) {
      break;
    }

    lista.push(numero);
  }

  if (lista.length === 0) {
    console.log("A lista está vazia.");
    return;
  }

  let maior = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > maior) {
      maior = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log("Maior valor:", maior);
  console.log("Menor valor:", menor);
}

encontrarMaiorMenor();
