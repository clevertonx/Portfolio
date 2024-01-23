const textoParaDigitar = document.getElementById('texto-digitar').innerText;
const elementoParaDigitar = document.getElementById('texto-digitar');
elementoParaDigitar.innerHTML = '';

const quantidadesPorLinha = [65, 65, 65, 61, 56, 54, 51, 65, 45];
let linhaAtual = 0;

function digitar() {
    let i = 0;
    let caracteresNaLinha = 0;

    const intervalo = setInterval(function () {
        const caractereAtual = textoParaDigitar.charAt(i);

        if (caracteresNaLinha >= quantidadesPorLinha[linhaAtual] && caractereAtual !== ' ') {
            elementoParaDigitar.innerHTML += '<br>';
            caracteresNaLinha = 0;
            linhaAtual++;

            if (linhaAtual >= quantidadesPorLinha.length) {
                clearInterval(intervalo);
            }
        }

        elementoParaDigitar.innerHTML += caractereAtual;
        caracteresNaLinha++;
        i++;

        if (i >= textoParaDigitar.length) {
            clearInterval(intervalo);
        }
    }, 70); 
}

digitar();