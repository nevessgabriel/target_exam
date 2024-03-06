//Q3. Descubra a lógica e complete o próximo elemento:


// Sequência a) 1, 3, 5, 7, ___
function completarSequenciaA() {
    let ultimoNumero = 7;
    let proximoNumero = ultimoNumero + 2;
    return proximoNumero;
}

console.log(completarSequenciaA()); // Resultado: 9

// Sequência b) 2, 4, 8, 16, 32, 64, ____
function completarSequenciaB() {
    let ultimoNumero = 64;
    let proximoNumero = ultimoNumero * 2;
    return proximoNumero;
}

console.log(completarSequenciaB()); // Resultado: 128

// Sequência c) 0, 1, 4, 9, 16, 25, 36, ____
function completarSequenciaC() {
    let ultimoNumero = 36;
    let proximoNumero = Math.pow(Math.sqrt(ultimoNumero) + 1, 2);
    return proximoNumero;
}

console.log(completarSequenciaC()); // Resultado: 49

// Sequência d) 4, 16, 36, 64, ____
function completarSequenciaD() {
    let ultimoNumero = 64;
    let proximoNumero = Math.pow(Math.sqrt(ultimoNumero) + 1, 2);
    return proximoNumero;
}

console.log(completarSequenciaD()); // Resultado: 100

// Sequência e) 1, 1, 2, 3, 5, 8, ____
function completarSequenciaE() {
    let penultimoNumero = 5;
    let ultimoNumero = 8;
    let proximoNumero = penultimoNumero + ultimoNumero;
    return proximoNumero;
}

console.log(completarSequenciaE()); // Resultado: 13

// Sequência f) 2, 10, 12, 16, 17, 18, 19, ____
function completarSequenciaF() {
    let ultimoNumero = 19;
    let proximoNumero = ultimoNumero + 1;
    return proximoNumero;
}

console.log(completarSequenciaF()); // Resultado: 20
