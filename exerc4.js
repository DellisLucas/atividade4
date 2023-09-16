import PromptSync from "prompt-sync";   

const prompt = PromptSync()

function listaHobbies() {
    const hobbies = [];
  
    while (true) {
      const hobby = prompt('Digite um hobby (ou pressione Enter para encerrar): ');
      if (hobby === '') {
        break;
      }
      hobbies.push(hobby);
    }
  
    return hobbies;
  }

function main() {
    const nome = prompt('Digite o nome do cliente: ');
  
    if (nome === '') {
      console.log('Nome não fornecido.');
      return;
    }
  
    const hobbies = listaHobbies();
  
    if (hobbies.length === 0) {
      console.log('Nenhum hobby fornecido.');
      return;
    }
  
    const hobbiesFormatados = hobbies.join(', ');
    console.log(`${nome} | ${hobbiesFormatados}`);
  }
  
  main();
