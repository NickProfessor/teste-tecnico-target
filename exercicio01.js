// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

const INDICE = 13;
var SOMA = 0;
var K = 0;

while (K < INDICE){
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

// A RESPOSTA É 91!!