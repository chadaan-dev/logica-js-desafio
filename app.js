alert('Bem-vindo ao jogo do Número Secreto.');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
    chute = prompt(`Por favor, escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao número secreto
    if (chute == numeroSecreto){
        break;        
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++ ;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas.' : 'tentativa.'
alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*
if (tentativas > 1) {
    alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Parabéns, você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
*/