
var next = document.querySelector('.next')
var previus = document.querySelector('.previus')
var robotron = document.querySelector('.robo')

var options = [
    {
        name: 'robotron',
        forca: '768',
        poder: '630',
        energia: '289',
        velocidade: '597',
        imagem: 'img/robotron.png'
    },
    {
        name: 'robotron',
        forca: '798',
        poder: '730',
        energia: '389',
        velocidade: '697',
        imagem: 'img/robotron-amarelo.png',
    },
    {
        name: 'robotron',
        forca: '935',
        poder: '831',
        energia: '583',
        velocidade: '591',
        imagem: 'img/robotron-branco.png',
    },
    {
        name: 'robotron',
        forca: '955',
        poder: '730',
        energia: '589',
        velocidade: '697',
        imagem: 'img/robotron-preto.png',
    },
    {
        name: 'robotron',
        forca: '738',
        poder: '430',
        energia: '575',
        velocidade: '730',
        imagem: 'img/robotron-rosa.png',
    },
    {
        name: 'robotron',
        forca: '468',
        poder: '534',
        energia: '449',
        velocidade: '649',
        imagem: 'img/robotron-vermelho.png',
    },
]
var contador = 0;

function nextrobotron() {
    if (contador <= options.length - 2) {
        contador++
        document.querySelector('.robo').src = options[contador].imagem
        document.querySelector('.forca').innerHTML = options[contador].forca
        document.querySelector('.poder').innerHTML = options[contador].poder
        document.querySelector('.energia').innerHTML = options[contador].energia
        document.querySelector('.velocidade').innerHTML = options[contador].velocidade
    } else {
        contador = -1
        nextrobotron()
    }
}
function previusrobotron() {
    if (contador > 0) {
        contador--
        document.querySelector('.robo').src = options[contador].imagem
        document.querySelector('.forca').innerHTML = options[contador].forca
        document.querySelector('.poder').innerHTML = options[contador].poder
        document.querySelector('.energia').innerHTML = options[contador].energia
        document.querySelector('.velocidade').innerHTML = options[contador].velocidade
    } else {
        contador = 6
        previusrobotron()
    }
}

function add(elemento) {
    if (document.querySelector(elemento).value < 10) {
        document.querySelector(elemento).value++
    }
}

function remove(elemento) {
    if (document.querySelector(elemento).value - 1 >= 0) {
        document.querySelector(elemento).value--
    }
}
