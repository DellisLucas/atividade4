import PromptSync from "prompt-sync";

const prompt = PromptSync()

function tabuada(numero, limite) {
    for (let i = 1; i <= limite; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }

const numero = Number(prompt("Digite um número: "))
const limite = Number(prompt("Digite o número limite: "))

tabuada(numero, limite)