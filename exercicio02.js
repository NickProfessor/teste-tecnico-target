// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma 
// dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem 
// que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem 
// avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode 
// ser previamente definido no código;

function confereSePertenceAFibonacci(numero) {
    let numeroAtualDaSequencia = 0;
    let numeroAnterior = 0;
    let numeroAntesDoAnterior;
    while (numeroAtualDaSequencia <= numero) {
        if (numeroAtualDaSequencia == 0) {
            if (numeroAtualDaSequencia == numero) {
                console.log("Esse número pertence a sequência fibonacci")
                return;
            }
            numeroAtualDaSequencia = 1;
        } else {
            numeroAntesDoAnterior = numeroAnterior
            numeroAnterior = numeroAtualDaSequencia
            numeroAtualDaSequencia = numeroAnterior + numeroAntesDoAnterior
        }
        if (numeroAtualDaSequencia == numero) {
            console.log("Esse número pertence a sequência fibonacci")
            return;
        }
    }
    console.log("Esse número não pertence a sequência fibonacci")
}

confereSePertenceAFibonacci(0) // Altere para qualquer número aqui