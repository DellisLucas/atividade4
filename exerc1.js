import PromptSync from "prompt-sync";

const prompt = PromptSync()

function encontrarMaior(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }
  
  // Exemplo de uso:
  const num1 = Number(prompt("Digite o primeiro número: "))
  const num2 = Number(prompt("Digite o segundo número: "))
  const num3 = Number(prompt("Digite o terceiro número: "))

  const maior = encontrarMaior(num1, num2, num3);

  console.log("O maior número é:", maior);

  
  
  
  
  