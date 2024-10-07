let lista = [
    'img/robotron.png',
    'img/robotron-amarelo.png',
    'img/robotron-azul.png',
    'img/robotron-vermelho.png',
    'img/robotron-rosa.png',
    'img/robotron-preto.png',
    'img/robotron-branco.png'
];

let posicao = 0;
const imgElement = document.querySelector('.robo');

document.getElementById('btnant').addEventListener('click', () => {
    posicao = (posicao - 1 + lista.length) % lista.length;
    imgElement.src = lista[posicao];
});

document.getElementById('btnprx').addEventListener('click', () => {
    posicao = (posicao + 1) % lista.length;
    imgElement.src = lista[posicao];
});


function ajustarValor(idContador, delta) {
    const contador = document.getElementById(idContador);
    let valorAtual = parseInt(contador.value);
    valorAtual = Math.min(Math.max(valorAtual + delta, 0), 10);
    contador.value = valorAtual;
}


document.getElementById('bracos-mais').addEventListener('click', () => {
    ajustarValor('bracos-contador', 1);
});
document.getElementById('bracos-menos').addEventListener('click', () => {
    ajustarValor('bracos-contador', -1);
});


document.getElementById('blindagem-mais').addEventListener('click', () => {
    ajustarValor('blindagem-contador', 1);
});
document.getElementById('blindagem-menos').addEventListener('click', () => {
    ajustarValor('blindagem-contador', -1);
});


document.getElementById('nucleos-mais').addEventListener('click', () => {
    ajustarValor('nucleos-contador', 1);
});
document.getElementById('nucleos-menos').addEventListener('click', () => {
    ajustarValor('nucleos-contador', -1);
});


document.getElementById('pernas-mais').addEventListener('click', () => {
    ajustarValor('pernas-contador', 1);
});
document.getElementById('pernas-menos').addEventListener('click', () => {
    ajustarValor('pernas-contador', -1);
});


document.getElementById('foguetes-mais').addEventListener('click', () => {
    ajustarValor
});