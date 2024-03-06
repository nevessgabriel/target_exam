//Q4. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?


function descobrirInterruptores() {
    // Simulando os interruptores e lâmpadas
    let interruptor1 = false; // false = desligado, true = ligado
    let interruptor2 = false;
    let interruptor3 = false;

    // Ligando o primeiro interruptor
    interruptor1 = true;

    // Aguardando um pouco
    // Simulando o tempo de espera
    setTimeout(function() {
        // Desligando o primeiro interruptor e ligando o segundo
        interruptor1 = false;
        interruptor2 = true;

        // Verificando o estado das lâmpadas após 2 segundos
        setTimeout(function() {
            console.log("Resultado:");
            // Supondo que as lâmpadas estão em uma sala diferente
            let lampada1 = interruptor1 ? "Acesa" : "Apagada";
            let lampada2 = interruptor2 ? "Acesa" : "Apagada";
            let lampada3 = interruptor3 ? "Acesa" : "Apagada";

            console.log("Lâmpada 1:", lampada1);
            console.log("Lâmpada 2:", lampada2);
            console.log("Lâmpada 3:", lampada3);

            if (!interruptor1 && !interruptor2) {
                console.log("O interruptor 3 controla a lâmpada 1.");
                console.log("O interruptor 1 controla a lâmpada 2.");
                console.log("O interruptor 2 controla a lâmpada 3.");
            } else if (!interruptor1 && interruptor2) {
                console.log("O interruptor 1 controla a lâmpada 1.");
                console.log("O interruptor 2 controla a lâmpada 2.");
                console.log("O interruptor 3 controla a lâmpada 3.");
            } else if (interruptor1 && !interruptor2) {
                console.log("O interruptor 1 controla a lâmpada 3.");
                console.log("O interruptor 2 controla a lâmpada 2.");
                console.log("O interruptor 3 controla a lâmpada 1.");
            } else {
                console.log("Erro: Verifique sua estratégia.");
            }
        }, 2000); 
    }, 2000); 
}

descobrirInterruptores();
