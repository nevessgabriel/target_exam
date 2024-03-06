//Q5. Escreva um programa que inverta os caracteres de um string.


function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}

// Exemplo
let minhaString = "Hello, world!"; // Inserir string a ser invertida
let stringInvertida = inverterString(minhaString);
console.log("String original:", minhaString);
console.log("String invertida:", stringInvertida);
